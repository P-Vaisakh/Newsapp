import axios from "axios";
import { base } from "./base";

export const fetchNews = async () => {
  let response = await axios.get(base);
  return response;
};

export const fetchNextPage = async (pageId) => {
  let response = await axios.get(`${base}&page=${pageId}`);
  return response;
};
