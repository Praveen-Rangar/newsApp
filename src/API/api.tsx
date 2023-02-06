import axios from "axios";
import { Show } from "../models/show";

export const searchShow = async (keyword: string) => {
  const response = await axios.get<{ show: Show }[]>(
    "https://api.tvmaze.com/search/shows?q=" + keyword
  );
  return response.data.map((item) => item.show);
};

// export const searchShow2 = async (keyword: string) => {
//   const response = await axios.get<{ show: Show }[]>(
//     "https://api.tvmaze.com/search/shows?q=" + keyword
//   );
//   const shows = response.data.map((item) => item.show);
//   const castPromises = [];
//   for (let i = 0; i < shows.length; i++) {
//     castPromises.push(getCast(shows[i]));
//   }
//   return Promise.all(castPromises);
// };

// const getCast = async (show: Show) => {
//   const castResponse = await axios.get<{ person: Cast }[]>(
//     "https://api.tvmaze.com/shows/" + show.id + "/cast"
//   );

//   const cast = castResponse.data.map((item: any) => item.person);
//   return { show, cast };
// };

// export const searchShow3 = (keyword: string) => {
//   return axios
//     .get<{ show: Show }[]>("https://api.tvmaze.com/search/shows?q=" + keyword)
//     .then((response) => {
//       const shows = response.data.map((item) => item.show);
//       const castPromises = [];
//       for (let i = 0; i < shows.length; i++) {
//         const castAndShowPromise = axios
//           .get("https://api.tvmaze.com/shows/" + shows[i].id + "/cast")
//           .then((response) => {
//             const cast = response.data.map((item: any) => item.person);
//             return { show: shows[i], cast };
//           });
//         castPromises.push(castAndShowPromise);
//       }
//       return Promise.all(castPromises);
//     });
// };
