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
  const [newCommentContent, setNewCommentContent] = useState("");

  const replyToComment = () => {
    const newReply: CommentType = {
      id: 1234,
      content: newCommentContent,
      createdAt: "Today",
      repliesTo: comment.user.username,
      score: 0,
      user: currentUser,
    };

    const handleReplySubmit = () => {
      comment.replies ? comment.replies.push(newReply) : comment.replies = [newReply];
      setRenderReply(false);
    };

    return (
      <div style={{ overflow: "hidden" }}>
        <div className={`${style.newComment} ${style.commentBase}`}>
          <img
            className={style.avatar}
            src={currentUser.image.png}
            alt="Current User Avatar"
          />
          <textarea
            rows={4}
            value={newCommentContent}
            style={{ resize: "none" }}
            className={style.newCommentInput}
            onChange={(e) => setNewCommentContent(e.currentTarget.value)}
          />
          <button
            className={style.newCommentReply}
            onClick={() => handleReplySubmit()}
          >
            <p>REPLY</p>
          </button>
        </div>
      </div>
    );
  };

  const renderReplies = () => {
    return (
      comment.replies &&
      comment.replies?.length > 0 && (
        <div className={style.replySection}>
          <div className={style.verticalLine}></div>
          <div className={style.repliesContainer}>
            {comment.replies.map((r: CommentType) => (
              <Comment key={r.id} comment={r} currentUser={currentUser} />
            ))}
          </div>
        </div>
      )
    );
  };

  return (
    <div>
      <div
        className={`${style.commentAndNewReply} ${
          renderReply ? `${style.commentAndNewReplyShow}` : ""
        }`}
      >
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
                onClick={() => {
                  setRenderReply(!renderReply);
                  setNewCommentContent(`@${comment.user.username}, `);
                }}
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
        {replyToComment()}
      </div>
      {renderReplies()}
    </div>
  );
};
