import { createSelector } from "reselect";
import { State } from "../store";

const showsStateSelector = (state: State) => state.shows;

export const showsQuerySelector = createSelector(
  showsStateSelector,
  (showState) => showState.query
);

export const showMapSelector = createSelector(
  showsStateSelector,
  (showState) => showState.shows
);

export const queryShowMapSelector = createSelector(
  showsStateSelector,
  (showState) => showState.query_shows
);

export const showsLoadingSelector = createSelector(
  showsStateSelector,
  (showState) => showState.loading
);

export const showsLoadingDetailsSelector = createSelector(
  showsStateSelector,
  (showState) => showState.show_detail_loading
);

export const showsSelector = createSelector(
  showMapSelector,
  showsQuerySelector,
  queryShowMapSelector,
  (showMap, query, queryShowsMap) =>
    queryShowsMap[query]?.map((showId) => showMap[showId])
);
