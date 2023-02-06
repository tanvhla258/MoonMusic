import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetSongDetailsQuery } from "../redux/services/shazamCore";
import { BsInfoCircle } from "react-icons/bs";
const SongCard = ({ index, isPlaying, activeSong, song, data }) => {
  //const { data, isFetching, error } = useGetSongDetailsQuery(songKey);
  const dispatch = useDispatch();
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, index }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex w-full items-center">
      <div className="flex w-7/8  relative my-2 gap-16 px-2 hover:cursor-pointer py-1 hover:bg-white rounded-md hover:drop-shadow-md smooth-transition">
        <span className="w-1/8 text-slate-600 ">
          {index < 10 ? `0${index}` : index}
        </span>
        <span className="w-1/4 text-slate-600 truncate ">{song.title}</span>
        <span className="w-1/2 text-slate-600 truncate ">{song.subtitle}</span>
        <PlayPause
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          handlePause={handlePauseClick}
          handlePlay={handlePlayClick}
        />
      </div>
      <Link to="/songs/123" className="w-1/8">
        <BsInfoCircle size={18} className="w-[105%] hover:scale-105" />
      </Link>
    </div>
  );
};

export default SongCard;
