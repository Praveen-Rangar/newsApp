import axios from "axios";
import { Cast } from "../models/Cast";
import { Show } from "../models/show";

export const castShowAPI = (showId: number) => {
  return axios
    .get<{ person: Cast }[]>("https://api.tvmaze.com/shows/" + showId + "/cast")
    .then((Response) => Response.data.map((item) => item.person));
};
