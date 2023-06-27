import axios from "axios";
import { randomNumber } from "../../../utils";
import { USER_RANDOM_URL } from "../constants";
import { createUserAdapter } from "../adapters/user.adapter";

const userInstance = axios.create({
  baseURL: USER_RANDOM_URL,
});

export const loginUser = () => {
  userInstance.get(`/${randomNumber()}`, {
    transformResponse: [
      function (data) {
        return createUserAdapter(data);
      },
    ],
  });
};
