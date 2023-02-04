import { ActionCreater } from ".";
import { Show } from "../models/show";

export const SHOW_DETAILS_LOADED = "SHOW_DETAILS_LOADED";

export const showDetailsAction: ActionCreater<Show> = (show: Show) => ({
  type: SHOW_DETAILS_LOADED,
  payload: show,
});

export const SHOWS_ID_CHANGE = "SHOWS_ID_CHANGE";

export const showIdChangeAction: ActionCreater<number> = (showsId) => ({
  type: SHOWS_ID_CHANGE,
  payload: showsId,
});
