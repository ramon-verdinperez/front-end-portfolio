import styles from "./detailedSummary.module.css";
import reactionIcon from "../images/icon-reaction.svg";
import memoryIcon from "../images/icon-memory.svg";
import visualIcon from "../images/icon-visual.svg";
import verbalIcon from "../images/icon-verbal.svg";

export interface DetailedSummaryProps {
  reactionScore: number;
  memoryScore: number;
  verbalScore: number;
  visualScore: number;
}

interface ScoreBar {
  score: number;
  text: string;
  icon: string;
  color: string;
}

export const DetailedSummary = (props: DetailedSummaryProps) => {
  const { reactionScore, memoryScore, verbalScore, visualScore } = props;

  const scores: ScoreBar[] = [
    {
      score: reactionScore,
      text: "Reaction",
      icon: reactionIcon,
      color: "hsl(0, 100%, 67%",
    },
    {
      score: memoryScore,
      text: "Memory",
      icon: memoryIcon,
      color: "hsl(39, 100%, 56%",
    },
    {
      score: verbalScore,
      text: "Verbal",
      icon: verbalIcon,
      color: "hsl(166, 100%, 37%",
    },
    {
      score: visualScore,
      text: "Visual",
      icon: visualIcon,
      color: "hsl(234, 85%, 45%",
    },
  ];

  const renderScoreSummary = (score: ScoreBar) => {
    return (
      <div
        className={`${styles.scoreSummary}`}
        style={{ backgroundColor: `${score.color}, 10%)` }}
      >
        <img src={score.icon} alt="reactionIcon" />
        <h4 style={{ color: score.color }}>{score.text}</h4>
        <p>{score.score} / 100</p>
      </div>
    );
  };

  return (
    <div className={styles.outer}>
      <div className={styles.title}>
        <h3>Summary</h3>
      </div>
      <div className={styles.scores}>
        {scores.map((sc) => renderScoreSummary(sc))}
      </div>
      <div className={styles.button}>
        <p>Continue</p>
      </div>
    </div>
  );
};
