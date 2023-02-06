import { call, put } from "redux-saga/effects";
import { Action } from "../actions";
import {
  showCastIdChangeAction,
  showCastLoadedAction,
} from "../actions/showCast";
import { showDetailsAction } from "../actions/showDetails";
import { showsLoadedAction } from "../actions/shows";
import { searchShow } from "../API/api";
import { castShowAPI } from "../API/castAPI";
import { productDetailsAPI } from "../API/productDetailsAPI";

export function* fetchShows(action: Action): Generator<any, any, any> {
  const shows = yield call(searchShow, action.payload);
  yield put(showsLoadedAction(shows));
}

export function* fetchShowDetails(action: Action): Generator<any, any, any> {
  const showDetails = yield call(productDetailsAPI, action.payload);
  yield put(showDetailsAction(showDetails));
}

export function* fetchShowCast(action: Action): Generator<any, any, any> {
  const showCast = yield call(castShowAPI, action.payload);
  yield put(showCastLoadedAction(showCast));
}
