import axios from "axios";
import { BASE_URL } from "../constants";

const instanceNBA = axios.create({
  baseURL: BASE_URL,
});
