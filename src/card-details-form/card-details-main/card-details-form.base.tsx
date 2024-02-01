import styles from "./card-details-form.module.css";

export const CardDetailsForm = () => {
  return (
    <div className={styles.outer}>
      <div className={styles.cardsContainer}>
        <div className={styles.frontCard}></div>
        <div className={styles.backCard}></div>
      </div>
      <div className={styles.leftImage} />
      <div className={styles.formContentOuter}>
        <form className={styles.cardForm}>
          <div className={styles.genericInput}>
            <label>CARDHOLDER NAME</label>
            <input type="text" placeholder="e.g. Jane Appleseed"></input>
          </div>

          <div className={styles.genericInput}>
            <label> CARD NUMBER</label>
            <input type="text" placeholder="e.g. 1234 5678 9123 0000"></input>
          </div>

          <div className={styles.dateAndCVC}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label>EXP. DATE (MM/YY)</label>
                          <div style={{ display: "flex", flexDirection: "row", gap: '5px' }}>
                <input
                  type="text"
                  placeholder="MM"
                ></input>
                <input
                  type="text"
                  placeholder="YY"
                ></input>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <label>CVC</label>
              <input
                type="text"
                placeholder="e.g. 123"
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
