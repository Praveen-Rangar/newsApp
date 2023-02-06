import { ActionCreater } from ".";
import { Cast } from "../models/Cast";

export const SHOW_CAST_LOADED = "SHOW_CAST_LOADED ";

export const showCastLoadedAction: ActionCreater<Cast> = (cast: Cast) => ({
  type: SHOW_CAST_LOADED,
  payload: cast,
});

export const SHOW_CAST_ID_CHANGE = "SHOW_CAST_ID_CHANGE";

export const showCastIdChangeAction: ActionCreater<number> = (castId) => ({
  type: SHOW_CAST_ID_CHANGE,
  payload: castId,
});
