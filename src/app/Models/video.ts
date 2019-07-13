import { User } from "./User";

export class Video {
  id: number;
  userName: User;
  title: string;
  description: string;
  uploadedAt: Date;
  type: string;
  url: string;
  size: number;
}
