import { useGetArtistQuery } from "../redux/services/shazamCore";
import Loader from "./Loader";
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
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
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
const TopChartsCard = ({
  song,
  i,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => {
  return (
    <div
      key={i}
      className="w-full gap-2 flex items-center hover:bg-slate-300 cursor-pointer hover:rounded smooth-transition py-1"
    >
      <span>{i + 1}.</span>
      <img
        src={song?.images?.coverart}
        alt="top chart"
        className="w-10 h-10 rounded-lg hover:scale-105 smooth-transition cursor-pointer"
      />
      <div className="flex truncate w-3/4 flex-col ">
        <Link to={`/songs/${song?.hub?.actions?.[0].id}`}>
          <h3 className=" text-slate-800 text-sm cursor-pointer font-semibold hover:underline smooth-transition ">
            {song?.title}
          </h3>
        </Link>
        <Link to={`/artists/${song?.artists?.[0].adamid}`}>
          <h3 className="text-sm text-slate-400 hover:text-slate-800">
            {song.subtitle}
          </h3>
        </Link>
      </div>
      <div className="w-full h-10">
        <PlayPause
          song={song}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePause={handlePauseClick}
          handlePlay={handlePlayClick}
        />
      </div>
      {isPlaying && activeSong?.title === song.title ? (
        <BsFillPauseFill size={40} className="" />
      ) : (
        <BsFillPlayFill size={40} className="" />
      )}
    </div>
  );
};

const TopPlay = ({ getList }) => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: topPlayData, isFetchingTopPlay } = useGetTopChartsQuery(
    "genre-country-chart-DE-1"
  );
  let topPlays = topPlayData?.tracks.slice(0, 5);
  const track = topPlayData?.tracks;
  //Fetch artist
  const { data: artData, isFetching: isFetchingArt } =
    useGetArtistQuery(73406786);

  if (isFetchingArt || isFetchingTopPlay) return <Loader />;

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data: track, i }));
    dispatch(playPause(true));
  };

  console.log(topPlayData);

  const art = artData?.data[0];

  return (
    <div className="flex py-4 pl-6 gap-6 flex-col">
      <div className="flex items-center justify-between">
        <h1 className="text-slate-900 text-2xl font-semibold">Top Chart</h1>
        <Link to="/top-charts">
          <span className="text-slate-400 text-sm leading-4 items-center flex">
            More <BiChevronRight className="inline-block" size={20} />
          </span>
        </Link>
      </div>
      <div className="gap-2 flex flex-col">
        {topPlays?.map((song, i) => {
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
