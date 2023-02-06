import { FC, useEffect, useState } from "react";
import CastCard from "../Components/CastCard";
import GenrePill from "../Components/GenrePill";
import withRouter, { WithRouterProps } from "../hocs/withRouter";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Show } from "../models/show";
import { connect } from "react-redux";
import { showIdChangeAction } from "../actions/showDetails";
import { State } from "../store";
import {
  castSelector,
  showMapSelector,
  showsLoadingDetailsSelector,
  showsLoadingSelector,
} from "../selectors/shows";
import LoadingSpinner from "../Components/LoadingSpinner";
import { showCastIdChangeAction } from "../actions/showCast";
import { Cast } from "../models/Cast";

type ShowDetailPageProps = {
  show: Show;
  showIdChange: (showId: number) => void;
  showCastIdChange: (castId: number) => void;
  cast: Cast[];
  loading: boolean;
} & WithRouterProps;

const ShowDetailPage: FC<ShowDetailPageProps> = ({
  params,
  showIdChange,
  show,
  cast,
  loading,
  showCastIdChange,
}) => {
  const showId = params.showId;
  console.log("cast", cast);

  useEffect(() => {
    showIdChange(+showId);
    showCastIdChange(+showId);
  }, [showId]);

  if (!show) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <LoadingSpinner />;
      </div>
    );
  }

  return (
    <div className="mt-2">
      <Link to="/">
        <BiArrowBack />
      </Link>
      <h2 className="text-4xl font-semibold tracking-wide">{show.name}</h2>
      {loading && <LoadingSpinner />}
      <div className="flex space-x-3 my-2 bg-gray-300 p-2 rounded-sm">
        {show.genres.map((genere) => (
          <GenrePill name={genere} key={genere} />
        ))}
      </div>
      <div className="mt-2 flex">
        <img
          src={
            show.image?.medium ||
            "https://images.unsplash.com/photo-1661956601031-4cf09efadfce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
          }
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72"
        />
        <div className="ml-2">
          <p dangerouslySetInnerHTML={{ __html: show.summary || "" }}></p>
          <p className="mt-2 text-lg font-bold border border-gray-700 rounded-md px-2 py-1 max-w-max">
            Rating:{" "}
            <span className="text-gray-700">{show.rating.average}/10</span>
          </p>
        </div>
      </div>

      <div className="mt-2">
        <h4 className="text-2xl font-semibold tracking-wide">Cast</h4>
        <div className="flex flex-wrap">
          {cast.map((item: Cast) => (
            <CastCard
              key={item.id}
              avatarLink={
                item.image?.medium ||
                item.image?.original ||
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
              }
              name={item.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  showIdChange: showIdChangeAction,
  showCastIdChange: showCastIdChangeAction,
};

const mapStateToProps = (state: State, ownProps: WithRouterProps) => {
  return {
    show: showMapSelector(state)[+ownProps.params.showId],
    cast: castSelector(state),
    loading: showsLoadingSelector(state),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ShowDetailPage)
);
