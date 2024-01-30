import style from "./comment.module.css";
import plusIcon from "../images/icon-plus.svg";
import minusIcon from "../images/icon-minus.svg";
import replyIcon from "../images/icon-reply.svg";
import editIcon from "../images/icon-edit.svg";
import deleteIcon from "../images/icon-delete.svg";
import { CommentType, User } from "../comment.types";
import { useState } from "react";

export interface CommentProps {
  comment: CommentType;
  currentUser: User;
}

export const Comment = (props: CommentProps) => {
  const { comment, currentUser } = props;
  const [isUpdating, setIsUpdating] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const [newCommentContent, setNewCommentContent] = useState("");
  const [commentEdit, setCommentEdit] = useState(comment.content);

  const renderCommentReplying = () => {
    const newReply: CommentType = {
      id: 1234,
      content: newCommentContent,
      createdAt: "Today",
      repliesTo: comment.user.username,
      score: 0,
      user: currentUser,
    };

    const handleReplySubmit = () => {
      comment.replies
        ? comment.replies.push(newReply)
        : (comment.replies = [newReply]);
      setIsReplying(false);
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
            className={style.newCommentInput}
            onChange={(e) => setNewCommentContent(e.currentTarget.value)}
          />
          <button
            className={style.interactiveButton}
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

  const renderCommentHeader = () => {
    return (
      <div className={style.commentHeader}>
        <img
          src={comment.user.image.png}
          alt="Avatar"
          className={style.avatar}
        />
        <h4>{comment.user.username}</h4>
        <p>{comment.createdAt}</p>
        {currentUser.username === comment.user.username ? (
          <div className={`${style.deleteAndEditContainer} ${style.button}`}>
            <div className={style.iconAndWordContainer} onClick={() => console.log("Delete")}> 
              <img src={deleteIcon} alt="Reply" />
              <p className={style.redWord}>Delete</p>
            </div>
            <div
              className={style.iconAndWordContainer}
              style={{ pointerEvents: isUpdating ? "none" : "all" }}
              onClick={() => {
                setIsUpdating(!isUpdating);
              }}
            >
              <img src={editIcon} alt="Reply" />
              <p className={style.purpleWord}>Edit</p>
            </div>
          </div>
        ) : (
          <div
            className={`${style.replyButton} ${style.button}`}
            onClick={() => {
              setIsReplying(!isReplying);
              setNewCommentContent(`@${comment.user.username} `);
            }}
          >
            <img src={replyIcon} alt="Reply" />
            <p>Reply</p>
          </div>
        )}
      </div>
    );
  };

  const renderCommentContent = () => {
    return isUpdating ? (
      <div className={style.updateCommentContent}>
        <textarea
          rows={4}
          className={style.newCommentInput}
          value={commentEdit}
          onChange={(e) => setCommentEdit(e.currentTarget.value)}
        />
        <button
          style={{ justifySelf: "flex-end" }}
          className={style.interactiveButton}
          onClick={() => {
            comment.content = commentEdit;
            setIsUpdating(false);
          }}
        >
          <p>UPDATE</p>
        </button>
      </div>
    ) : (
      <div className={style.commentContent}>
        <p>{comment.content}</p>
      </div>
    );
  };

  const renderRegularComment = () => {
    return (
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
          {renderCommentHeader()}
          {renderCommentContent()}
        </div>
      </div>
    );
  };

  return (
    <div>
      <div
        className={`${style.commentAndNewReply} ${
          isReplying ? `${style.commentAndNewReplyShow}` : ""
        }`}
      >
        {renderRegularComment()}
        {renderCommentReplying()}
      </div>
      {renderReplies()}
    </div>
  );
};
