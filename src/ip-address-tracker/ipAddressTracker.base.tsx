import { useForm } from "react-hook-form";
import iconArrow from "./assets/icon-arrow.svg";
import styles from "./ipAddressTracker.module.css";
import { useState } from "react";
import { render } from "@testing-library/react";

export interface IPAddressInfo {
  ip: string;
  isp: string;
  location: {
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

  const ipLookup = async () => {
    await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${
        process.env.REACT_APP_IP_LOOKUP_KEY
      }&ipAddress=${getValues("ipAddress")}`
    )
      .then((r) => r.json())
      .then((d) => setIpInfo(d));
  };

  const renderHeader = () => {
    return (
      <div className={styles.header}>
        <h2 className={styles.title}>IP Address Tracker</h2>

        <form onSubmit={handleSubmit(() => ipLookup())}>
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

  return (
    <div className={styles.outer}>
      {renderHeader()}
      {/* <div className={styles.informationContainer}></div> */}
    </div>
  );
};
