import { useState, useEffect } from "react";

interface TypeWriterTextProps {
  textList: string[];
  typeDelay?: number;
  eraseDelay?: number;
  pauseOnWordDelay?: number;
    typeNewWordDelay?: number;
    
}

export const TypeWriterText = (props: TypeWriterTextProps) => {
  const {
    textList,
    typeDelay,
    eraseDelay,
    pauseOnWordDelay,
    typeNewWordDelay,
  } = props;

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
      }, typeDelay || 40);
    } else if (currentTextIndex >= 0 && reverseText) {
      //Deleting
      timeout = setTimeout(() => {
        setTypeWriteText((prevText) => prevText.substring(0, currentTextIndex));
        setCurrentTextIndex((prevIndex) => prevIndex - 1);
      }, eraseDelay || 30);
    } else {
      //Reseting
      timeout = setTimeout(
        () => {
          if (reverseText && currentTextIndex === -1)
            setCurrentListIndex((prevIndex) =>
              prevIndex === textList.length - 1 ? 0 : currentListIndex + 1
            );
          setReverseText(reverseText ? false : true);
          setCurrentTextIndex(reverseText ? 0 : currentWord.length);
        },
        reverseText ? typeNewWordDelay || 500 : pauseOnWordDelay || 1000
      );
    }

    return () => clearTimeout(timeout);
  }, [
    currentTextIndex,
    typeWriterText,
    reverseText,
    textList,
    currentListIndex,
    typeDelay,
    eraseDelay,
    typeNewWordDelay,
    pauseOnWordDelay,
  ]);

  return (
    <>
      {typeWriterText}
      &nbsp;
    </>
  );
};
