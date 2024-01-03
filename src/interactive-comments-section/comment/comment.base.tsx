import style from "./comment.module.css";
import plusIcon from "../images/icon-plus.svg";
import minusIcon from "../images/icon-minus.svg";
import replyIcon from "../images/icon-reply.svg";
import { CommentType } from "../comment.types";

export interface CommentProps {
  comment: CommentType;
}

export const Comment = (props: CommentProps) => {
  const { comment } = props;

  return (
    <div>
      <div className={style.outer}>
        <div className={style.likeCountOuter}>
          <div className={style.likeCounter}>
            <div className={style.likeCounterItem}>
              <img src={plusIcon} alt="Plus Button" />
            </div>
            <div className={style.likeCounterItem}>
              <p>{comment.score}</p>
            </div>
            <div className={style.likeCounterItem}>
              <img src={minusIcon} alt="Minus Button" />
            </div>
          </div>
        </div>
        <div className={style.mainContentOuter}>
          <div className={style.commentHeader}>
            <img
              src={comment.user.image.png}
              alt="Avatar"
              className={style.avatar}
            />
            <h4>{comment.user.username}</h4>
            <p>{comment.createdAt}</p>
            <div className={style.replyButton}>
              <img src={replyIcon} alt="Reply" />
              <p>Reply</p>
            </div>
          </div>
          <div className={style.commentContent}>
            <p>{comment.content}</p>
          </div>
        </div>
      </div>
      {comment.replies && comment.replies?.length > 0 && (
        <div className={style.replySection}>
          <div className={style.verticalLine}></div>
          <div className={style.reply}>
            {comment.replies.map((r: CommentType) => (
              <Comment comment={r} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
