import axios from "axios";

export const productDetailsAPI = async (showId: number) => {
  const response = await axios.get("https://api.tvmaze.com/shows/" + showId);
  return response.data;
};
