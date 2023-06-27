import { User } from "../../interfaces";

export const createUserAdapter = (user: any): User => ({
  idUser: user.data.id,
  nameUser: user.data.name,
  nicknameUser: user.data.username,
  emailUser: user.data.email,
});
