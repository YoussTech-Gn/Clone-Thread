export interface ThreadType {
  id: string;
  author: User;
  content: string;
  image?: string;
  replies?: Reply[];
  repliesCount: number;
  likesCount: number;
  mention?: boolean;
  mentionUser?: User;
  createdAt: string;
  sharedCount: number;
}

export interface Reply {
  id: string;
  author: User;
  content: string;
  likes?: number;
  createdAt: string;
  replies?: Reply[];
}

export interface User {
  id: string;
  name: string;
  username: string;
  verified: boolean;
  avatar?: string;
  bio?: string;
  link: string;
  followers?: User[];
}
