import { CommentType } from "../comment.types";
import { Comment } from "../comment/comment.base";
import style from "./socialFeedMain.module.css";
import data from "../data.json";

export const SocialFeedMain = () => {
  const comments: CommentType[] = data.comments;

  return (
    <div className={style.outer}>
      <div className={style.socialFeed}>
        {comments.map((c) => (
          <Comment comment={c as unknown as CommentType} />
        ))}
      </div>
    </div>
  );
};
