import { useEffect, useState } from "react";
import {
  showsLoadedAction,
  showsQueryAction,
  SHOWS_LOADED,
} from "../actions/shows";
import { searchShow } from "../API/api";
import SearchBar from "../Components/SearchBar";
import ShowCard from "../Components/ShowCard";
import { Show } from "../models/show";
import { FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import { State } from "../store";
import {
  showsLoadingSelector,
  showsQuerySelector,
  showsSelector,
} from "../selectors/shows";
import LoadingSpinner from "../Components/LoadingSpinner";
import { castShowAPI } from "../API/castAPI";

type showListPageProps = ReduxProps;
const ShowListPage: FC<showListPageProps> = ({
  shows,
  query,
  showsQuery,
  loading,
}) => {
  return (
    <div className="mt-2">
      <div className="flex items-center ">
        <SearchBar
          value={query}
          onChange={(event) => showsQuery(event.target.value)}
        />
        {loading && <LoadingSpinner />}
      </div>

      <div className="flex flex-wrap justify-center">
        {shows && shows.map((s) => <ShowCard key={s.id} show={s} />)}
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  showsQuery: showsQueryAction,
};

const mapStateToProps = (state: State) => {
  return {
    query: showsQuerySelector(state),
    shows: showsSelector(state),
    loading: showsLoadingSelector(state),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;

export default connector(ShowListPage);
