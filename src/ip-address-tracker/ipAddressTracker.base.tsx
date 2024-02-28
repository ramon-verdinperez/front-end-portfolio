import { useForm } from "react-hook-form";
import iconArrow from "./assets/icon-arrow.svg";
import marker from "./assets/icon-location.svg";
import styles from "./ipAddressTracker.module.css";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

export interface IPAddressInfo {
  ip: string;
  isp: string;
  location: {
    region: string;
    city: string;
    country: string;
    lat: number;
    lng: number;
    timezone: string;
  };
}

export const IpAddressTracker = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ipAddress: "",
    },
    mode: "onBlur",
  });

  const [ipInfo, setIpInfo] = useState<IPAddressInfo>();

  const customIcon = new Icon({
    iconUrl: marker,
    iconAnchor: [23, 56],
  });

  const ipLookup = async () => {
    await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${
        process.env.REACT_APP_IP_LOOKUP_KEY
      }&ipAddress=${getValues("ipAddress")}`
    )
      .then((r) => r.json())
      .then((d: IPAddressInfo) => {
        setIpInfo(d);
      });
  };

  const RecenterAutomatically = () => {
    const map = useMap();
    useEffect(() => {
      if (ipInfo) {
        map.setView([ipInfo?.location.lat, ipInfo?.location.lng], 11, {
          animate: true,
        });
      }
    }, [ipInfo]);

    return null;
  };

  const renderHeader = () => {
    return (
      <div className={styles.header}>
        <h2 className={styles.title}>IP Address Tracker</h2>

        <form
          className={styles.ipAddressForm}
          onSubmit={handleSubmit(() => ipLookup())}
        >
          <div
            className={`${styles.inputSection} ${
              errors.ipAddress ? `${styles.inputSectionError}` : ""
            }`}
          >
            <input
              className={`${styles.ipInput} ${
                errors.ipAddress ? `${styles.ipInputError}` : ""
              }`}
              {...register("ipAddress", {
                required: "Please enter an IP Address",
                pattern: {
                  value: /^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/,
                  message: "Please enter a valid IP Address",
                },
              })}
              placeholder="e.g. 192.0.0.100"
              maxLength={15}
            />
            <div
              className={styles.submitButton}
              onClick={handleSubmit(() => ipLookup())}
            >
              <img src={iconArrow} alt="submit arrow" />
            </div>
          </div>
          <p className={styles.errorMessage}>{errors.ipAddress?.message}</p>
        </form>
      </div>
    );
  };

  const renderIpInfo = () => {
    return (
      <div className={styles.informationContainer}>
        <div className={styles.informationSubContainer}>
          <h4>IP ADDRESS</h4>
          <h2>{ipInfo?.ip}</h2>
        </div>
        <div className={styles.informationSubContainer}>
          <h4>LOCATION</h4>
          {ipInfo && (
            <h2>
              {ipInfo?.location.city}, {ipInfo?.location.region}
            </h2>
          )}
        </div>
        <div className={styles.informationSubContainer}>
          <h4>TIMEZONE</h4>
          {ipInfo && <h2>UTC{ipInfo?.location.timezone}</h2>}
        </div>
        <div className={styles.informationSubContainer}>
          <h4>ISP</h4>
          <h2>{ipInfo?.isp}</h2>
        </div>
      </div>
    );
  };

  const renderMap = () => {
    return (
      <MapContainer
        className={styles.mapContainer}
        center={[40, -100]}
        zoom={4}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {ipInfo && (
          <Marker
            position={[ipInfo.location.lat, ipInfo.location.lng]}
            icon={customIcon}
          >
            <Popup>Here they are</Popup>
          </Marker>
        )}
        <RecenterAutomatically />
      </MapContainer>
    );
  };

  return (
    <>
      <div className={styles.outer}>
        {renderIpInfo()}
        {renderHeader()}
        {renderMap()}
      </div>
    </>
  );
};
