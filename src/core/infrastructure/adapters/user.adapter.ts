import { User, UserPlaceholder } from "../../interfaces";

export const createUserAdapter = (data: UserPlaceholder): User => {
  return {
    idUser: data.id,
    nameUser: data.name,
    nicknameUser: data.username,
    emailUser: data.email,
  };
};
