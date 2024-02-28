import { useState } from "react";
import { CardDetailsForm } from "../card-details-form/card-details-main/card-details-form.base";
import { FaqAccordianMain } from "../faq-accordian/faq-accordian-main/faqAccordianMain.base";
import { SocialFeedMain } from "../interactive-comments-section/socialFeed/socialFeedMain.base";
import { IpAddressTracker } from "../ip-address-tracker/ipAddressTracker.base";
import { ResultsSummaryMain } from "../results-summary-component/results-summary-main/resultsSummaryMain.base";
import { TypeWriterText } from "../type-writer/typeWriter.base";
import styles from "./exampleComponents.module.css";

export const ExampleComponents = () => {
  const [typedTextExample, setTypedTextExample] = useState("");
  const [typeDelay, setTypeDelay] = useState<number>();
  const [deleteDelay, setDeleteDelay] = useState<number>();
  const [pauseOnWord, setPauseOnWord] = useState<number>();
  const [pauseBetweenWord, setPauseBetweenWord] = useState<number>();

  return (
    <div className={styles.outer}>
      <div className={styles.componentsOuter}>
        <div className={styles.componentsSummary}>
          <h1>Example Components</h1>
          <p>
            Below are a few examples of reusable components that I have put
            together. The components displayed are just a very small example of
            the work I am capable of doing. The vast majority of the examples
            seen below are taken from the{" "}
            <a href="https://www.frontendmentor.io/home">frontendmentor.io</a>{" "}
            challenges page. Some are very simple and only require simple HTML
            and CSS, while others get a little more advanced and require more
            HTML, CSS, JS, as well API use. As mentioned, these are only a few
            examples of work I can do and would be more than
          </p>
        </div>
        <div className={styles.componentContainer}>
          <h1>Typed Text</h1>
          <form className={styles.typedTextForm}>
            <div>
              <label>Text to type out: </label>
              <input
                type="text"
                value={typedTextExample}
                onChange={(e) => setTypedTextExample(e.currentTarget.value)}
              ></input>
            </div>
            <div>
              <label>Type delay: </label>
              <input
                type="range"
                value={typeDelay}
                min="10"
                max="2000"
                onChange={(e) =>
                  setTypeDelay(e.currentTarget.value as unknown as number)
                }
              ></input>
            </div>
            <div>
              <label>Character delete delay: </label>
              <input
                type="range"
                value={deleteDelay}
                min="10"
                max="1000"
                onChange={(e) =>
                  setDeleteDelay(e.currentTarget.value as unknown as number)
                }
              ></input>
            </div>
            <div>
              <label>Pause on word: </label>
              <input
                type="range"
                value={pauseOnWord}
                min="10"
                max="3000"
                onChange={(e) =>
                  setPauseOnWord(e.currentTarget.value as unknown as number)
                }
              ></input>
            </div>
            <div>
              <label>Pause between word: </label>
              <input
                type="range"
                value={pauseBetweenWord}
                min="10"
                max="3000"
                onChange={(e) =>
                  setPauseBetweenWord(
                    e.currentTarget.value as unknown as number
                  )
                }
              ></input>
            </div>
          </form>
          <div style={{ wordBreak: "break-word", width: "100%" }}>
            <h2>
              <TypeWriterText
                textList={[typedTextExample]}
                typeDelay={typeDelay}
                eraseDelay={deleteDelay}
                pauseOnWordDelay={pauseOnWord}
                typeNewWordDelay={pauseBetweenWord}
              />
            </h2>
          </div>
        </div>
        <div style={{ height: "800px" }} className={styles.componentContainer}>
          <h1>FAQ Accordion</h1>
          <FaqAccordianMain />
        </div>
        <div className={styles.componentContainer}>
          <h1>Results Summary</h1>
          <ResultsSummaryMain
            scores={{
              reactionScore: 80,
              memoryScore: 90,
              verbalScore: 61,
              visualScore: 72,
            }}
          />
        </div>
        <div className={styles.componentContainer}>
          <h1>Card Details Form</h1>
          <CardDetailsForm />
        </div>
        <div className={styles.componentContainer}>
          <h1>IP Address Tracker</h1>
          <IpAddressTracker />
        </div>
        <div className={styles.componentContainer}>
          <h1>Social Feed Main</h1>
          <SocialFeedMain />
        </div>
      </div>
    </div>
  );
};
