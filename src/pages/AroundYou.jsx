import { Error, Loader, SongCard } from "../components";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

import { Link } from "react-router-dom";
import PlayPause from "../components/PlayPause.jsx";

import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import { TopChartsCard } from "../components/TopPlay";

const CountryTracks = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching } = useGetTopChartsQuery("ip-country-chart-SG");
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data: data.tracks, i }));
    dispatch(playPause(true));
  };

  if (isFetching) return <Loader title="Loading songs around you" />;
  console.log(data);
  return (
    <div>
      <div className="flex flex-col">
        <h2 className="font-bold text-3xl text-left mt-4 mb-10">Around you</h2>
        <div className=" sm:justify-start gap-8 h-[280px] ">
          {data?.tracks.map((song, i) => {
            return (
              <TopChartsCard
                song={song}
                i={i}
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePauseClick={handlePauseClick}
                handlePlayClick={() => handlePlayClick(song, i)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CountryTracks;
