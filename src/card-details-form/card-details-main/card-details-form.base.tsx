import { useState } from "react";
import styles from "./card-details-form.module.css";
import { useForm } from "react-hook-form";

interface CardDetails {
  name: string;
  cardNumber: string;
  expMonth: number | undefined;
  expYear: number | undefined;
  cvc: number | undefined;
}

export const CardDetailsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      cardNumber: "",
      expMonth: undefined,
      expYear: undefined,
      cvc: undefined,
    },
    delayError: 100,
    mode: "onBlur",
  });

  return (
    <div className={styles.outer}>
      <div className={styles.cardsContainer}>
        <div className={styles.frontCard}></div>
        <div className={styles.backCard}></div>
      </div>
      <div className={styles.leftImage} />
      <div className={styles.formContentOuter}>
        <form
          className={styles.cardForm}
          onSubmit={handleSubmit((d) => console.log(d))}
        >
          <div className={styles.genericInput}>
            <h4>CARDHOLDER NAME</h4>
            <input
              type="text"
              placeholder="e.g. Jane Appleseed"
              {...register("name", {
                required: "Please enter the card holder name!",
              })}
            />
            {errors.name?.message}
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
            />
            {errors.cardNumber?.message}
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
                      message: "2 digit month",
                    },
                  })}
                  maxLength={2}
                />
                <input
                  type="text"
                  placeholder="YY"
                  {...register("expYear", {
                    required: "Can't be blank",
                    pattern: {
                      value: /^[0-9]{2}$/,
                      message: "2 digit month",
                    },
                  })}
                  maxLength={2}
                />
              </div>
              {errors.expMonth?.message}
              {errors.expYear?.message}
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
              />
              {errors.cvc?.message}
            </div>
          </div>
          <input
            type="submit"
            className={styles.confirmButton}
            value="Confirm"
          />
        </form>
      </div>
    </div>
  );
};
