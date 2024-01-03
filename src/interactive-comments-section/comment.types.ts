export interface CommentType {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replies?: Array<CommentType>;
  repliesTo?: string;
}

export interface User {
  image: { png: string, webp: string };
  username: string;
}