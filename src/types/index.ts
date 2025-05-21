export interface IProject {
  _id: string;
  title: string;
  description: string;
  images: string[];
  github_link_client: string;
  github_link_server: string;
  live_link: string;
  isDeleted: boolean;
  createdAt: string; // or Date if you parse it
  updatedAt: string; // or Date if you parse it
  __v: number;
}

export interface IBlog {
    _id: string;
    title: string;
    images: string;
    description: string;
    createdAt:Date;
    updatedAt:Date;
}
export interface IMessage {
    _id: string;
    name: string;
    number: number;
    subject: string;
    message: string;
    email: string;
}
export interface ISkill {
    title: string,
    icon: string,
    description: string
}