import sweCoding from "./assets/swe-coding.png";
import githubIcon from "./assets/github-icon.png";
import linkedInIcon from "./assets/linkedin.png";
import resumeIcon from "./assets/resume-icon.png";
import gmailIcon from "./assets/gmail.png";
import jsIcon from "./assets/Technologies/javascript.png";
import cssIcon from "./assets/Technologies/css.png";
import azureIcon from "./assets/Technologies/azure.png";
import firebaseIcon from "./assets/Technologies/firebase.png";
import gitIcon from "./assets/Technologies/git.png";
import htmlIcon from "./assets/Technologies/html.png";
import sqlIcon from "./assets/Technologies/mysql.png";
import postmanIcon from "./assets/Technologies/postman.png";
import reactIcon from "./assets/Technologies/react.png";
import reduxIcon from "./assets/Technologies/redux.png";
import tsIcon from "./assets/Technologies/typescript.png";
import cppIcon from "./assets/Technologies/cpp.png";
import pythonIcon from "./assets/Technologies/python.png";
import apiIcon from "./assets/Technologies/api.png";
import pwIcon from "./assets/Technologies/playwright.png";
import jestIcon from "./assets/Technologies/jest.png";
import figmaIcon from "./assets/Technologies/figma.png";
import netPlus from "./assets/Certifications/networkPlus.png"
import styles from "./aboutMe.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { TypeWriterText } from "../type-writer/typeWriter.base";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

interface Technologies {
  text: string;
  link: string;
  proficiency: number;
}

interface Certifications {
  text: string;
  link: string;
}

export const AboutMe = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const tech: Technologies[] = [
    {
      text: "Javascript",
      link: jsIcon,
      proficiency: 8,
    },
    {
      text: "Typescript",
      link: tsIcon,
      proficiency: 8,
    },
    {
      text: "React",
      link: reactIcon,
      proficiency: 8,
    },
    {
      text: "Redux",
      link: reduxIcon,
      proficiency: 6,
    },
    {
      text: "Playwright",
      link: pwIcon,
      proficiency: 5,
    },
    {
      text: "Jest",
      link: jestIcon,
      proficiency: 5,
    },
    {
      text: "APIs",
      link: apiIcon,
      proficiency: 8,
    },
    {
      text: "HTML",
      link: htmlIcon,
      proficiency: 8,
    },
    {
      text: "CSS",
      link: cssIcon,
      proficiency: 8,
    },
    {
      text: "Git",
      link: gitIcon,
      proficiency: 8,
    },
    {
      text: "Azure",
      link: azureIcon,
      proficiency: 5,
    },
    {
      text: "MySql",
      link: sqlIcon,
      proficiency: 6,
    },
    {
      text: "Firebase",
      link: firebaseIcon,
      proficiency: 6,
    },
    {
      text: "Postman",
      link: postmanIcon,
      proficiency: 6,
    },
    {
      text: "C++",
      link: cppIcon,
      proficiency: 7,
    },
    {
      text: "Python",
      link: pythonIcon,
      proficiency: 6,
    },
    {
      text: "Figma",
      link: figmaIcon,
      proficiency: 6,
    },
  ];

  const certs: Certifications[] = [
    {
      text: "Network+",
      link: netPlus
    }
  ]

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

  const renderForm = () => {
    return (
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
    );
  };

  return (
    <div className={styles.outer}>
      <div className={styles.welcomingContainer}>
        <div className={styles.welcomeOuterSub}>
          <div className={styles.welcomeSubContainer}>
            <div style={{ width: "75%" }}>
              <h1 className={styles.welcomeTitle}>Hi all! I am Ramon!</h1>
              <h1 className={styles.welcomeSubTitle}>
                <TypeWriterText
                  textList={["Software Developer", "Frontend Developer"]}
                />
              </h1>
              <div className={styles.welcomeIntro}>
                <p>
                  My name is Ramon Verdin. I am a frontend web app developer in
                  the early stages of my career. I am currently on the search
                  for employment and am open to tackling projects and concepts I
                  am and am not familiar with.
                </p>
              </div>
              <div className={styles.iconTray}>
                <a
                  href="https://github.com/ramon-verdinperez"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={githubIcon}
                    alt="Github Icon"
                    title="Github Account"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/ramon-v-4762b7133/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={linkedInIcon}
                    alt="Linked In Icon"
                    title="LinkedIn Account"
                  />
                </a>
                <a
                  href="mailto: ramonverdin17@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={gmailIcon} alt="Gmail Icon" title="Send email" />
                </a>
                <a
                  href={require("./assets/resume.pdf")}
                  download="Ramon_Verdin_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={resumeIcon} alt="resume icon" title="Resume" />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.welcomeSubContainer}>
            <img
              style={{ height: "400px" }}
              src={sweCoding}
              alt="A software developer at work"
            />
          </div>
        </div>
        <div className={styles.arrowContainer}>
          <FontAwesomeIcon icon={faChevronDown} size="2xl" />
        </div>
      </div>
      <div className={styles.aboutMeContainer}>
        <div className={styles.aboutMeContent}>
          <h1 className={styles.aboutMeTitle}>About Me</h1>
          <p className={styles.aboutMeSummary}>
            I am Ramon Verdin a San Francisco Bay Area native with a Bacehelor's
            degree in Computer Science from the University of California, Santa
            Barbara. I am in the early stages of my career in the search for
            employment. In my first professional position as a software
            developer with HCLTech, I learned a lot and was able to get a
            glimpse at how the professional world of a software developer. I
            learned many technologies and tools and was able to put them to the
            test. Despite my lack of professional experience, my determination
            and ability to quickly learn has helped me and will help me in
            succeeding.
            <br />
            <br />
          </p>

          <h1 className={styles.aboutMeTitle}>Technologies</h1>
          <p className={styles.aboutMeSummary}>
            While I am no master in one particular technology, my ability to
            quickly learn and adapt has led me to become proficient in several
            technologies. My primary focus and strongest skill has to be
            Frontend development. I was lucky enough to hone in on this skill in
            my previous employment at Microsoft (through contract with HCLTech).
            In this position I had the opportunity to work alongside several
            Microsoft engineers, designers, and project stakeholders to develop
            a web application using React, Typescript, and several other
            technologies. While this was my first official application that made
            it into production, it was a great way to learn and develop my
            skills while also learning the tools of the trade. It taught me
            invaluable lessons that will remain with me for my career to come.
            <br />
            <br />
          </p>
          <div className={styles.technologiesOuterContainer}>
            {tech.map((t: Technologies) => {
              return (
                <div className={styles.techContainer} key={t.text}>
                  <img src={t.link} alt={t.text} />
                  <p>{t.text}</p>
                  <div className={styles.progressOuter}>
                    <div
                      className={styles.progressInner}
                      style={{ width: `${t.proficiency}0%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
          <br />
          <br />

          <h1 className={styles.aboutMeTitle}>Certifications</h1>
          <div className={styles.technologiesOuterContainer}>
            {certs.map((c: Certifications) => {
              return (
                <div className={styles.techContainer} key={c.text}>
                  <img src={c.link} alt={c.text} />
                  <p>{c.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {renderForm()}
    </div>
  );
};
