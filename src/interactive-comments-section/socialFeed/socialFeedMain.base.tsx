import { CommentType, User } from "../comment.types";
import { Comment } from "../comment/comment.base";
import style from "./socialFeedMain.module.css";
import data from "../data.json";

export const SocialFeedMain = () => {
  const comments: CommentType[] = data.comments;
  const currentUser: User = data.currentUser;

  return (
    <div className={style.outer}>
      <div className={style.socialFeed}>
        {comments.map((c: CommentType) => (
          <Comment comment={c} currentUser={currentUser}/>
        ))}
      </div>
    </div>
  );
};
