import axiosClient from "./axiosClient";

const END_POINT = {
  JOKE: "jokes",
};
export const getJokeAPI = () => {
  return axiosClient.get(`${END_POINT.JOKE}`);
};
