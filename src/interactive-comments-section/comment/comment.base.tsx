import style from "./comment.module.css";
import plusIcon from "../images/icon-plus.svg";
import minusIcon from "../images/icon-minus.svg";
import replyIcon from "../images/icon-reply.svg";
import { CommentType, User } from "../comment.types";
import { useState } from "react";

export interface CommentProps {
  comment: CommentType;
  currentUser: User;
}

export const Comment = (props: CommentProps) => {
  const { comment, currentUser } = props;
  const [renderReply, setRenderReply] = useState(false);

  const replyToComment = () => {
    const newReply: CommentType = {
      id: 1234,
      content: "",
      createdAt: "Today",
      repliesTo: comment.user.username,
      score: 0,
      user: currentUser,
    };

    return (
      <div className={`${style.newComment} ${style.commentBase}`}>
        <img
          className={style.avatar}
          src={currentUser.image.png}
          alt="Current User Avatar"
        />
        <textarea
          rows={4}
          content={newReply.repliesTo}
          className={style.newCommentInput}
        />
        <button className={style.newCommentReply}>
          <p>REPLY</p>
        </button>
      </div>
    );
  };

  return (
    <div>
      <div className={`${style.regularComment} ${style.commentBase}`}>
        <div className={style.likeCountOuter}>
          <div className={style.likeCounter}>
            <div className={`${style.likeCounterItem} ${style.button}`}>
              <img src={plusIcon} alt="Plus Button" />
            </div>
            <div className={style.likeCounterItem}>
              <p>{comment.score}</p>
            </div>
            <div className={`${style.likeCounterItem} ${style.button}`}>
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
            <div
              className={`${style.replyButton} ${style.button}`}
              onClick={() => setRenderReply(!renderReply)}
            >
              <img src={replyIcon} alt="Reply" />
              <p>Reply</p>
            </div>
          </div>
          <div className={style.commentContent}>
            <p>{comment.content}</p>
          </div>
        </div>
      </div>
      {renderReply && replyToComment()}
      {comment.replies && comment.replies?.length > 0 && (
        <div className={style.replySection}>
          <div className={style.verticalLine}></div>
          <div className={style.reply}>
            {comment.replies.map((r: CommentType) => (
              <Comment comment={r} currentUser={currentUser} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
