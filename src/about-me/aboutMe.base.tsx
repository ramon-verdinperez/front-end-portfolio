import sweCoding from "./assets/swe-coding.png";
import githubIcon from "./assets/github-icon.png";
import linkedInIcon from "./assets/linkedin.png";
import resumeIcon from "./assets/resume-icon.png";
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
import styles from "./aboutMe.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { TypeWriterText } from "../type-writer/typeWriter.base";

interface Technologies {
  text: string;
  link: string;
}

export const AboutMe = () => {
  const tech: Technologies[] = [
    { text: "Javascript", link: jsIcon },
    { text: "Typescript", link: tsIcon },
    { text: "React", link: reactIcon },
    { text: "Redux", link: reduxIcon },
    { text: "APIs", link: apiIcon },
    { text: "HTML", link: htmlIcon },
    { text: "CSS", link: cssIcon },
    { text: "Git", link: gitIcon },
    { text: "Azure", link: azureIcon },
    { text: "MySql", link: sqlIcon },
    { text: "Firebase", link: firebaseIcon },
    { text: "Postman", link: postmanIcon },
    { text: "C++", link: cppIcon },
    { text: "Python", link: pythonIcon },
  ];

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
      <div className={styles.aboutMeContainer}></div>
      <div className={styles.technologiesOuterContainer}>
        {tech.map((t: Technologies) => {
          return (
            <div className={styles.techContainer} key={t.text}>
              <img src={t.link} alt={t.text} />
              <p>{t.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
