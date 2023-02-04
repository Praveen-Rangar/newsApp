import { ActionCreater } from ".";
import { Show } from "../models/show";

export const SHOWS_LOADED = "SHOWS_LOADED";

export const showsLoadedAction: ActionCreater<Show[]> = (shows: Show[]) => ({
  type: SHOWS_LOADED,
  payload: shows,
});

export const SHOWS_QUERY_CHANGE = "SHOWS_QUERY_CHANGE";

export const showsQueryAction: ActionCreater<string> = (query) => ({
  type: SHOWS_QUERY_CHANGE,
  payload: query,
});

