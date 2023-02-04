import axios from "axios";
import { Cast } from "../models/Cast";
import { Show } from "../models/show";

export const castShowAPI = () => {
  return axios
    .get("https://api.tvmaze.com/shows/1/cast")
    .then((Response) => Response.data.map((item: any) => item.person));
};
