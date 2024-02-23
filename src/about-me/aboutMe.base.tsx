import sweCoding from './assets/swe-coding.png';
import styles from './aboutMe.module.css';
import { useEffect, useState } from 'react';

export const AboutMe = () => {

    const textList: string[] = ['Software Developer', 'Frontend Developer'];
    const [typeWriterText, setTypeWriteText] = useState('');
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentListIndex, setCurrentListIndex] = useState(0);
    const [reverseText, setReverseText] = useState(false);

    useEffect(() => {

        let timeout: any;
        const currentWord = textList[currentListIndex];

        if (currentTextIndex < currentWord.length && !reverseText) { //Typing
            timeout = setTimeout(() => {
                setTypeWriteText(prevText => prevText + currentWord[currentTextIndex]);
                setCurrentTextIndex(prevIndex => prevIndex + 1);
            }, 40);
        } else if (currentTextIndex >= 0 && reverseText) { //Deleting
            timeout = setTimeout(() => {
                setTypeWriteText(prevText => prevText.substring(0, currentTextIndex));
                setCurrentTextIndex(prevIndex => prevIndex - 1);
            }, 30);
        } else { //Resetting
            timeout = setTimeout(() => {
                if (reverseText && currentTextIndex === -1) setCurrentListIndex(prevIndex => prevIndex === textList.length - 1 ? 0 : currentListIndex + 1);
                setReverseText(reverseText ? false : true);
                setCurrentTextIndex(reverseText ? 0 : currentWord.length);
            }, reverseText ? 500 : 1000);
        }

        return () => clearTimeout(timeout);

    }, [currentTextIndex, typeWriterText, reverseText]);

    return (
        <div className={styles.outer}>
            <div className={styles.welcomingContainer}>
                <div className={styles.welcomeSubContainer}>
                    <h1 className={styles.welcomeTitle}>Hi, I am Ramon!</h1>
                    <h1 className={styles.welcomeSubTitle}><span style={{ fontWeight: "400" }}>- </span>{typeWriterText}</h1>
                    <p>My name is Ramon Verdin. I am a frontend web application developer in the early stages of my career.
                        I am currently searching for employment and am open to learning new technologies and staying up to date.
                    </p>
                </div>
                <div className={styles.welcomeSubContainer}>
                    <img style={{ height: '400px' }} src={sweCoding} alt="A software developer at work" />
                </div>
            </div>
        </div>
    )
}