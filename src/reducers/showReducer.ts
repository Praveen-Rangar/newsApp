import produce from "immer";
import { schema, normalize } from "normalizr";
import { AnyAction } from "redux";
import { SHOW_DETAILS_LOADED } from "../actions/showDetails";
import { SHOWS_LOADED, SHOWS_QUERY_CHANGE } from "../actions/shows";
import { Show } from "../models/show";

export type State = {
  shows: { [showId: number]: Show };
  query_shows: { [query: string]: number[] };
  query: string;
  show_detail_loading: { [showId: number]: boolean };
  loading: boolean;
};

export const initialState: State = {
  shows: {},
  query_shows: {},
  query: "",
  show_detail_loading: {},
  loading: false,
};

function showReducer(state = initialState, action: AnyAction): State {
  switch (action.type) {
    case SHOWS_LOADED:
      return produce(state, (draft) => {
        const shows = action.payload as Show[];

        if (!shows || shows.length === 0) {
          return;
        }

        const showSchema = new schema.Entity("shows");
        console.log("showSchema", showSchema);

        const normalizedData = normalize(shows, [showSchema]);
        draft.loading = false;

        draft.query_shows[draft.query] = normalizedData.result;
        console.log("normalizedData", normalizedData);

        draft.shows = {
          ...draft.shows,
          ...normalizedData.entities.shows,
        };
      });

    case SHOWS_QUERY_CHANGE:
      return produce(state, (draft) => {
        draft.query = action.payload;
        draft.loading = true;
      });

    case SHOW_DETAILS_LOADED:
      return produce(state, (draft) => {
        const show = action.payload as Show;
        draft.loading = true;

        draft.shows[show.id] = show;
        draft.loading = false;
      });

    default:
      return state;
  }
}

export default showReducer;
