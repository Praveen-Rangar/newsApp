import produce from "immer";
import { AnyAction } from "redux";
import { SHOW_CAST_LOADED } from "../actions/showCast";
import { Cast } from "../models/Cast";

export type State = {
  cast: Cast[];
};

export const initialState: State = {
  cast: [],
};

function castReducer(state = initialState, action: AnyAction): State {
  switch (action.type) {
    case SHOW_CAST_LOADED:
      return produce(state, (draft) => {
        const cast = action.payload as Cast[];
        draft.cast = cast;
      });
    default:
      return state;
  }
}

export default castReducer;
