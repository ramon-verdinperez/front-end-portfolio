import "./overallResult.styles.css";

export interface OverallResultProps {
  score: number;
}

export const OverallResult = (props: OverallResultProps) => {
  const { score } = props;

  return (
    <div className="overallResultOuter">
      <div className="overallResultTitle">
        <h4>Your Result</h4>
      </div>
      <div className="scoreCircle">
        <div className="score">
          <h1>{score}</h1>
        </div>
        <div className="maxScore">
          <h5> of 100</h5>
        </div>
      </div>
      <div className="scoreTitle">
        <h2>Great</h2>
      </div>
      <div className="scoreDescription">
        <p>You scored higher than 65% of the people who have taken these tests.</p>
      </div>
    </div>
  );
};
