import { call, put } from "redux-saga/effects";
import { Action } from "../actions";
import { showDetailsAction } from "../actions/showDetails";
import { showsLoadedAction } from "../actions/shows";
import { searchShow, searchShow2 } from "../API/api";
import { castShowAPI } from "../API/castAPI";
import { productDetailsAPI } from "../API/productDetailsAPI";

export function* fetchShows(action: Action): Generator<any, any, any> {
  searchShow2("games").then((Response) => console.log("response is", Response));
  const shows = yield call(searchShow, action.payload);
  yield put(showsLoadedAction(shows));
}

export function* fetchShowDetails(action: Action): Generator<any, any, any> {
  const showDetails = yield call(productDetailsAPI, action.payload);
  yield put(showDetailsAction(showDetails));
}
