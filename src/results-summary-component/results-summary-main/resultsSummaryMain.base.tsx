import {
  DetailedSummary,
  DetailedSummaryProps,
} from "../detailedSummary/detailedSummary.base";
import { OverallResult } from "../overallResult/ovearallResult.base";
import styles from "./resultsSummaryMain.module.css";

export interface ResultsSummaryMainProps {
  scores: DetailedSummaryProps;
}

export const ResultsSummaryMain = (props: ResultsSummaryMainProps) => {
  const { scores } = props;

  const totalScore: number =
    scores.reactionScore +
    scores.memoryScore +
    scores.verbalScore +
    scores.visualScore;

  return (
    <div className={styles.outerContainer}>
      <div className={styles.summaryContainer}>
        <OverallResult score={Math.round((totalScore / 400) * 100)} />
        <DetailedSummary
          reactionScore={scores.reactionScore}
          memoryScore={scores.memoryScore}
          verbalScore={scores.verbalScore}
          visualScore={scores.visualScore}
        />
      </div>
    </div>
  );
};
