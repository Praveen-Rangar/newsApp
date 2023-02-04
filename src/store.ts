import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import showReducer from "./reducers/showReducer";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "@redux-devtools/extension";
import { debounce, takeEvery, takeLatest } from "redux-saga/effects";
import { SHOWS_QUERY_CHANGE } from "./actions/shows";
import { fetchShowDetails, fetchShows } from "./sagas/shows";
import { SHOWS_ID_CHANGE } from "./actions/showDetails";

const reducer = combineReducers({
  shows: showReducer,
});

function* rootSaga() {
  yield debounce(200, SHOWS_QUERY_CHANGE, fetchShows);
  yield takeEvery(SHOWS_ID_CHANGE, fetchShowDetails);
}

const sagaMilddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMilddleware))
);
sagaMilddleware.run(rootSaga);

export type State = ReturnType<typeof reducer>;

export default store;
