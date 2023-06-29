import axios from "axios";
import { randomNumber } from "../../../utils";
import { USER_RANDOM_URL } from "../constants";
import { createUserAdapter } from "../adapters/user.adapter";

const userInstance = axios?.create({
  baseURL: USER_RANDOM_URL,
});

export const loginUserService = () => {
  return userInstance({
    method: "get",
    url: `/${randomNumber()}`,
    responseType: "json",
    transformResponse: [
      function (response) {
        return createUserAdapter(JSON.parse(response));
      },
    ],
  });
};
