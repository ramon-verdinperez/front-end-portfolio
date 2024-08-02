import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import styles from "./contatctForm.module.css";
import { useRef } from "react";

export const ContactForm = () => {

  const formRef = useRef<HTMLFormElement>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm({
        defaultValues: {
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        },
        delayError: 0,
        mode: "onSubmit",
      });

    const sendEmail = (data: any) => {
        emailjs
          .sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID!,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
            formRef.current!,
            {
              publicKey: process.env.REACT_APP_EMAILJS_KEY!,
            }
          )
          .then(
            () => {
              reset();
              alert("Message sent succesfully!");
            },
            (error) => {
              alert("Message failed to send please try again later!");
              console.log("FAILED...", error.text);
            }
          );
      };

    return(
    <div className={styles.contactFormContainer}>
    <form
      ref={formRef}
      onSubmit={handleSubmit(sendEmail)}
    >
      <div className={styles.formNames}>
        <label>First Name</label>
        <label>Last Name</label>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="text"
            id="First Name"
            placeholder="First Name"
            {...register("firstName", { required: "Required" })}
          />
          {errors.firstName && (
            <p className={styles.errorMessage}>
              {errors.firstName?.message}
            </p>
          )}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="text"
            id="Last Name"
            placeholder="Last Name"
            {...register("lastName", { required: "Required" })}
          />
          {errors.lastName && (
            <p className={styles.errorMessage}>
              {errors.lastName?.message}
            </p>
          )}
        </div>
      </div>

      <div className={styles.formEntries}>
        <label>Email</label>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="text"
            id="Email"
            placeholder="Email"
            {...register("email", {
              required: "Required",
              pattern: {
                value: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
                message: "Please add a valid email",
              },
            })}
          />
          {errors.email?.message && (
            <p className={styles.errorMessage}>{errors.email?.message}</p>
          )}
        </div>
      </div>
      <div className={styles.formMessage}>
        <label>Message</label>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <textarea
            rows={5}
            id="message"
            {...register("message", { required: "Required" })}
          ></textarea>
          {errors.message && (
            <p className={styles.errorMessage}>{errors.message.message}</p>
          )}
        </div>
      </div>
      <input type="submit" value="Submit" className={styles.submitButton} />
    </form>
  </div>
)
}