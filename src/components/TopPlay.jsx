import {
  useGetChartListsQuery,
  useGetArtistQuery,
} from "../redux/services/shazamCore";
import Loader from "./Loader";
import { HiSun } from "react-icons/hi";
import { Artist } from "./Artist";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PlayPause from "./PlayPause.jsx";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import {
  FcMusic,
  FcRating,
  FcVip,
  FcPicture,
  FcLike,
  FcGlobe,
} from "react-icons/fc";
import { BiChevronRight } from "react-icons/bi";
import { FiPlusSquare } from "react-icons/fi";
const shortcutIcons = [
  <FcMusic />,
  <FcGlobe />,
  <FcVip />,
  <FcPicture />,
  <FcLike />,
  <FcRating />,
];
const TopChartsCard = ({ song, i }) => {
  return (
    <div key={i} className="w-full flex items-center">
      {song.title}
    </div>
  );
};

const TopPlay = ({ getList }) => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: topPlayData, isFetchingTopPlay } = useGetTopChartsQuery(
    "genre-country-chart-DE-1"
  );
  //Fetch artist
  const { data: artData, isFetching: isFetchingArt } =
    useGetArtistQuery(73406786);

  if (isFetchingArt || isFetchingTopPlay) return <Loader />;

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, index }));
    dispatch(playPause(true));
  };

  console.log(topPlayData);
  let topPlays = topPlayData?.tracks.slice(0, 5);

  console.log(artData);

  const art = artData?.data[0];

  return (
    <div className="flex px-6 gap-6 flex-col">
      <div className="flex items-center justify-between">
        <h1 className="text-slate-900 text-2xl font-semibold">Top Chart</h1>
        <Link to="/top-charts">
          <span className="text-slate-400 text-sm leading-4 items-center flex">
            More <BiChevronRight className="inline-block" size={20} />
          </span>
        </Link>
      </div>
      <div>
        {topPlays?.map((song, i) => {
          return <TopChartsCard song={song} i={i} />;
        })}
      </div>
      <h1 className="text-slate-900 text-2xl font-semibold">Fav Artists</h1>
      <div className="">
        <div className="flex hover:cursor-pointer smooth-transition hover:drop-shadow-xl  flex-col items-center  w-[240px] p-4 h-48  rounded-2xl bg-white">
          <div className="h-[70%]">
            <img
              src={art?.attributes?.artwork?.url
                .replace("{w}", "200")
                .replace("{h}", "180")}
              alt=""
              className="rounded-2xl object-cover w-[200px] h-[110px]"
            />
          </div>
          <div className="w-full h-[30%] flex  items-center justify-between ">
            <div className="flex flex-col">
              <span className="font-semibold">{art?.attributes?.name}</span>
              <span className="text-slate-400 text-sm">Korean</span>
            </div>
            <FiPlusSquare size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPlay;
