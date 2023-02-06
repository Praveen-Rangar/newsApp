import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import showReducer from "./reducers/showReducer";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "@redux-devtools/extension";
import { debounce, takeEvery, takeLatest } from "redux-saga/effects";
import { SHOWS_QUERY_CHANGE } from "./actions/shows";
import { fetchShowCast, fetchShowDetails, fetchShows } from "./sagas/shows";
import { SHOWS_ID_CHANGE } from "./actions/showDetails";
import { SHOW_CAST_ID_CHANGE } from "./actions/showCast";
import castReducer from "./reducers/castReducer";

const reducer = combineReducers({
  shows: showReducer,
  cast: castReducer,
});

function* rootSaga() {
  yield debounce(200, SHOWS_QUERY_CHANGE, fetchShows);
  yield takeEvery(SHOWS_ID_CHANGE, fetchShowDetails);
  yield takeEvery(SHOW_CAST_ID_CHANGE, fetchShowCast);
}

const sagaMilddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMilddleware))
);
sagaMilddleware.run(rootSaga);

export type State = ReturnType<typeof reducer>;

export default store;
