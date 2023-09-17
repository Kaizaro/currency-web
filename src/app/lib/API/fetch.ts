import axios from "axios";
import {BASE_TIMEOUT, BASE_URL} from ".";

export const instance = axios.create({
  baseURL: BASE_URL,
  timeout: BASE_TIMEOUT,
  // headers: {'X-Custom-Header': 'foobar'}
});