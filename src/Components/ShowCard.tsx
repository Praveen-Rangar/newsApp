import { Avatar, AvatarGroup, Stack } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Cast } from "../models/Cast";
import { Show } from "../models/show";

type ShowCardProps = {
  show: Show;
};

const ShowCard: FC<ShowCardProps> = ({ show }) => {
  // const show = showsObject.show;
  // const Cast = showsObject.cast;

  return (
    <div className="max-w-xs rounded-md shadow-md p-2 m-1">
      <img
        src={
          show.image?.medium ||
          show.image?.original ||
          "https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
        }
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{show.name}</h2>
          <p dangerouslySetInnerHTML={{ __html: show.summary || "" }}></p>
        </div>
        <Link
          to={"/show/" + show.id}
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md"
        >
          View Details
        </Link>
        {/* <Stack spacing={4}>
          <Stack direction="row">
            <AvatarGroup max={4}>
              {Cast.map((item: Cast) => (
                <div key={item.id}>
                  <Avatar
                    alt="Remy Sharp"
                    src={item.image?.medium || item.image?.original}
                  />
                </div>
              ))}
            </AvatarGroup>
          </Stack>
        </Stack> */}
      </div>
    </div>
  );
};

export default ShowCard;
