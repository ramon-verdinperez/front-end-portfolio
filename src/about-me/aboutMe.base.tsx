import sweCoding from "./assets/swe-coding.png";
import gitIcon from "./assets/github-icon.png";
import linkedInIcon from "./assets/linkedin.png";
import resumeIcon from "./assets/resume-icon.png";
import styles from "./aboutMe.module.css";
import { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export const AboutMe = () => {
    const textList: string[] = useMemo(
        () => ["Software Developer", "Frontend Developer"],
        []
    );
    const [typeWriterText, setTypeWriteText] = useState("");
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentListIndex, setCurrentListIndex] = useState(0);
    const [reverseText, setReverseText] = useState(false);

    useEffect(() => {
        let timeout: any;
        const currentWord = textList[currentListIndex];

        if (currentTextIndex < currentWord.length && !reverseText) {
            //Typing
            timeout = setTimeout(() => {
                setTypeWriteText(
                    (prevText) => prevText + currentWord[currentTextIndex]
                );
                setCurrentTextIndex((prevIndex) => prevIndex + 1);
            }, 40);
        } else if (currentTextIndex >= 0 && reverseText) {
            //Deleting
            timeout = setTimeout(() => {
                setTypeWriteText((prevText) => prevText.substring(0, currentTextIndex));
                setCurrentTextIndex((prevIndex) => prevIndex - 1);
            }, 30);
        } else {
            //Resetting
            timeout = setTimeout(
                () => {
                    if (reverseText && currentTextIndex === -1)
                        setCurrentListIndex((prevIndex) =>
                            prevIndex === textList.length - 1 ? 0 : currentListIndex + 1
                        );
                    setReverseText(reverseText ? false : true);
                    setCurrentTextIndex(reverseText ? 0 : currentWord.length);
                },
                reverseText ? 500 : 1000
            );
        }

        return () => clearTimeout(timeout);
    }, [
        currentTextIndex,
        typeWriterText,
        reverseText,
        textList,
        currentListIndex,
    ]);

    return (
        <div className={styles.outer}>
            <div className={styles.welcomingContainer}>
                <div className={styles.welcomeOuterSub}>
                    <div className={styles.welcomeSubContainer}>
                        <div style={{ width: "75%" }}>
                            <h1 className={styles.welcomeTitle}>Hi all! I am Ramon!</h1>
                            <h1 className={styles.welcomeSubTitle}>
                                {typeWriterText}
                                &nbsp;
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
                                <a href="https://github.com/ramon-verdinperez" target="_blank" rel="noreferrer"><img src={gitIcon} alt="Github Icon" title="Github Account" /></a>
                                <a href="https://www.linkedin.com/in/ramon-v-4762b7133/" target="_blank" rel="noreferrer"><img src={linkedInIcon} alt="Linked In Icon" title="LinkedIn Account"/></a>
                                <a href={require("./assets/resume.pdf")} download="Ramon_Verdin_Resume.pdf" target="_blank"><img src={resumeIcon} alt="resume icon" title="Resume" /></a>
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
        </div>
    );
};
