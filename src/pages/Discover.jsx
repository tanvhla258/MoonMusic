import { useDispatch, useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import {
  useGetSongDetailsQuery,
  useGetChartListsQuery,
} from "../redux/services/shazamCore";
import { BiChevronRight } from "react-icons/bi";
import { HiFire } from "react-icons/hi";
import MusicPlayer from "../components/MusicPlayer/index";
import TopPlay from "../components/TopPlay";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FreeMode, Scrollbar, Mousewheel } from "swiper";

import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import {
  FcMusic,
  FcRating,
  FcVip,
  FcPicture,
  FcLike,
  FcGlobe,
} from "react-icons/fc";
export const shortcutIcons = [
  <FcMusic />,
  <FcGlobe />,
  <FcVip />,
  <FcPicture />,
  <FcLike />,
  <FcRating />,
  <FcMusic />,
  <FcGlobe />,
  <FcVip />,
  <FcPicture />,
  <FcLike />,
  <FcRating />,
  <FcMusic />,
  <FcGlobe />,
  <FcVip />,
  <FcPicture />,
  <FcLike />,
  <FcRating />,
];
const Discover = () => {
  const dispatch = useDispatch();
  const [listid, setlistid] = useState("genre-global-chart-14");
  const { data: chartData, isFetching: isFetchingChart } =
    useGetChartListsQuery();

  let { activeSong, isPlaying } = useSelector((state) => state.player);
  // const { setActiveSong } = useSelector(
  //   (state) => state.reducers.setActiveSong
  // );

  function getList(ListId) {
    setlistid(ListId);
    dispatch(playPause(true));
  }
  const { data, isFetching, error } = useGetTopChartsQuery(listid);
  console.log(data);
  if (isFetching) return <Loader></Loader>;
  if (error) return <Error />;

  return (
    <div className="flex w-[700px] flex-col ">
      <div className="w-full flex justify-between items-center mt-4 mb-5 sm:flex-row">
        <div className="w-full">
          <span className="text-slate-400 text-sm w-full  flex gap-1 items-center">
            What's hot
            <HiFire className="text-red pb-1" size={20} />
          </span>
          <div className="flex justify-between items-end">
            <h1 className="text-slate-900 text-3xl font-semibold">Trending</h1>
            <span className="text-slate-400 text-sm leading-4 items-center flex">
              More <BiChevronRight className="inline-block" size={20} />
            </span>
          </div>
        </div>
      </div>

      <div className="flex gap-3 ">
        <div
          className=" relative  rounded-2xl h-40 w-[60%] mb-4 bg-no-repeat bg-cover bg-bottom"
          style={{
            backgroundImage: `url("${data?.tracks[8].images.background}")`,
          }}
        >
          <div className="  w-full absolute bg-gradient-to-r from-white rounded-2xl h-full "></div>
          <span className=" top-5 left-5 z-1 absolute text-slate-400 text-sm leading-4">
            Artist
          </span>
          <h1 className="z-1 top-10 left-4  absolute text-slate-900 text-2xl font-semibold">
            On Top
          </h1>
          <h1 className=" z-1 top-[70px] left-4  absolute text-slate-900 text-2xl font-semibold">
            Of The World
          </h1>
          <button className="z-1 text-white font-semibold bottom-3 left-4 absolute bg-black border-2 border-black px-5 py-1 rounded-3xl">
            PLAY
          </button>
          <button className="z-1 text-black font-semibold bottom-3 left-28 absolute bg-transparent border-2 border-black px-5 py-1 rounded-3xl">
            FOLLOW
          </button>

          <span className="text-slate-300 bottom-6 right-2 z-1 absolute text-sm leading-4">
            Monthly Listener
          </span>
          <span className="text-slate-100 bottom-2 right-2 z-1 absolute  leading-4">
            32000
          </span>
        </div>
        <div className="flex justify-end pr-2 w-[45%] gap-3 h-40 overflow-scroll hide-scrollbar flex-wrap">
          {chartData?.global.genres.slice(2).map((genres, i) => {
            return (
              <div
                className="px-4 hover:cursor-pointer smooth-transition hover:drop-shadow-md py-2 gap-1 w-30  h-10 font-medium flex items-center  truncate rounded-3xl bg-white cursor-pointer"
                onClick={() => {
                  getList(genres.listid);
                }}
                key={i}
              >
                {shortcutIcons[i]}
                {genres.name}
              </div>
            );
          })}
        </div>
      </div>
      <div className=" w-full">
        <div className="flex justify-between">
          <h1 className="text-slate-900 text-2xl font-semibold">My Playlist</h1>

          <span className="text-slate-400 text-sm leading-4 flex items-center">
            Show All <BiChevronRight className="inline-block" size={20} />
          </span>
        </div>
        <div className="relative  mt-2 h-48 ">
          <div className="flex my-1 px-2  gap-16  ">
            <span className="text-sm w-1/6 text-slate-400 ">#</span>
            <span className="text-sm w-1/3 text-slate-400 ">Title</span>
            <span className="text-sm w-1/2 text-slate-400 ">Artist</span>
          </div>
          <div className="overflow-y-auto	h-[180px] hide-scrollbar overflow-x-hidden">
            {data?.tracks.map((song, i) => {
              return (
                <SongCard
                  song={song}
                  index={i}
                  key={i}
                  activeSong={activeSong}
                  isPlaying={isPlaying}
                  data={data?.tracks}
                ></SongCard>
              );
            })}
          </div>
        </div>
      </div>
      {/* <MusicPlayer></MusicPlayer> */}
      {activeSong?.title && (
        <div className="mt-7 drop-shadow-md w-full h-28  flex animate-slideup bg-white backdrop-blur-lg rounded-3xl ">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default Discover;
