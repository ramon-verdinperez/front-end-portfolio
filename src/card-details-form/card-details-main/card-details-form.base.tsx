import { useState } from "react";
import styles from "./card-details-form.module.css";
import { useForm } from "react-hook-form";
import checkSuccess from "../assets/icon-complete.svg";

export const CardDetailsForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      cardNumber: "",
      expMonth: undefined,
      expYear: undefined,
      cvc: undefined,
    },
    delayError: 0,
    mode: "onBlur",
  });

  const [submitSuccess, setSubmitSuccess] = useState(false);

  const renderCards = () => {
    return (
      <div className={styles.cardsContainer}>
        <div className={styles.frontCard}>
          <div>{""}</div>
          <div>
            <p className={styles.cardNumberOnCard}>
              {watch("cardNumber")
                .match(/.{1,4}/g)
                ?.join(" ") || "0000 0000 0000 0000"}
            </p>
          </div>
          <div className={styles.cardNameAndExp}>
            <p>{watch("name") || "Jane Appleseed"}</p>
            <span className={styles.cardExp}>
              <p>
                {watch("expMonth") || "00"}/{watch("expYear") || "00"}
              </p>
            </span>
          </div>
        </div>
        <div className={styles.backCard}>
          <span className={styles.cardCVConCard}>
            <p>{watch("cvc") || "000"}</p>
          </span>
        </div>
      </div>
    );
  };

  const renderForm = () => {
    return (
      <>
        <form
          className={styles.cardForm}
          onSubmit={handleSubmit(() => setSubmitSuccess(true) )}
        >
          <div className={styles.genericInput}>
            <h4>CARDHOLDER NAME</h4>
            <input
              type="text"
              placeholder="e.g. Jane Appleseed"
              {...register("name", {
                required: "Please enter the card holder name!",
              })}
              className={errors.name?.message ? styles.inputError : undefined}
            />
            {errors.name?.message && (
              <div>
                <p className={styles.errorMessage}>{errors.name?.message}</p>
              </div>
            )}
          </div>

          <div className={styles.genericInput}>
            <h4>CARD NUMBER</h4>
            <input
              type="text"
              placeholder="e.g. 1234 5678 9123 0000"
              {...register("cardNumber", {
                required: "Please enter the card number!",
                pattern: {
                  value: /^[0-9]{16}$/,
                  message: "Wrong Format, 16 numbers only",
                },
              })}
              maxLength={16}
              className={
                errors.cardNumber?.message ? styles.inputError : undefined
              }
            />
            {errors.cardNumber?.message && (
              <div>
                <p className={styles.errorMessage}>
                  {errors.cardNumber?.message}
                </p>
              </div>
            )}
          </div>

          <div className={styles.dateAndCVC}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h4>EXP. DATE (MM/YY)</h4>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "5px" }}
              >
                <input
                  type="text"
                  placeholder="MM"
                  {...register("expMonth", {
                    required: "Can't be blank",
                    pattern: {
                      value: /^0[0-9]|1[1-2]$/,
                      message: "2 digit month (1-12)",
                    },
                  })}
                  maxLength={2}
                  className={
                    errors.expMonth?.message ? styles.inputError : undefined
                  }
                />
                <input
                  type="text"
                  placeholder="YY"
                  {...register("expYear", {
                    required: "Can't be blank",
                    pattern: {
                      value: /^[0-9]{2}$/,
                      message: "2 digit year",
                    },
                  })}
                  maxLength={2}
                  className={
                    errors.expYear?.message ? styles.inputError : undefined
                  }
                />
              </div>
              {(errors.expMonth?.message || errors.expYear?.message) && (
                <div>
                  <p className={styles.errorMessage}>
                    {errors.expMonth?.message}
                  </p>
                  <p className={styles.errorMessage}>
                    {errors.expYear?.message}
                  </p>
                </div>
              )}
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <h4>CVC</h4>
              <input
                type="text"
                placeholder="e.g. 123"
                {...register("cvc", {
                  required: "Can't be blank",
                  pattern: {
                    value: /^[0-9]{3}$/,
                    message: "3 digit number",
                  },
                })}
                maxLength={3}
                className={errors.cvc?.message ? styles.inputError : undefined}
              />
              {errors.cvc?.message && (
                <div>
                  <p className={styles.errorMessage}>{errors.cvc?.message}</p>
                </div>
              )}
            </div>
          </div>
          <input
            type="submit"
            className={styles.confirmButton}
            value="Confirm"
            onClick={() =>  clearErrors()}
          />
        </form>
      </>
    );
  };

  const renderSubmitSuccess = () => {
    return (
      <div className={styles.submitSuccessOuter}>
        <img src={checkSuccess} alt="Successful Submission Checkmark" />
        <h1>THANK YOU!</h1>
        <h4>We've added your card details</h4>
        <input
          style={{ marginTop: "40px" }}
          onClick={() => {
            reset();
            setSubmitSuccess(false);
          }}
          className={styles.confirmButton}
          type="submit"
          value="Continue"
        />
      </div>
    );
  };

  return (
    <div className={styles.outer}>
      {renderCards()}
      <div className={styles.leftImage} />
      <div className={styles.contentOuter}>
        {submitSuccess ? renderSubmitSuccess() : renderForm()}
      </div>
    </div>
  );
};
