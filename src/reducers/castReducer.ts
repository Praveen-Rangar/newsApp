import produce from "immer";
import { AnyAction } from "redux";
import { Cast } from "../models/Cast";

export type State = {
  cast: { [castId: number]: Cast };
};

export const initialState: State = {
  cast: {},
};

function reducer(state = initialState, action: AnyAction): State {
  switch (action.type) {
    default:
      return state;
  }
}

export default reducer;
