import { Video } from './video';
import { User } from './user';

export class Comment {
    id:number;
    userId:User[];
    videoId:Video[];
    date:Date;
    body:string;
   
  }