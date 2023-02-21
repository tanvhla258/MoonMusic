import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
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
      <div className="flex w-10/12  relative my-2 gap-8 px-2 hover:cursor-pointer py-1 hover:bg-white rounded-md hover:drop-shadow-md smooth-transition">
        <span className="w-2/12 text-slate-600 ">
          {index < 9 ? `0${index + 1}` : index + 1}
        </span>
        <Link
          to={`/song/${song.id}`}
          className="w-4/12 text-slate-600 hover:underline truncate"
        >
          <span>{song.title}</span>
        </Link>
        <Link
          to={`/artist/${1234} `}
          className="w-4/12 text-slate-600 hover:underline truncate"
        >
          <span>{song.subtitle}</span>
        </Link>
        <PlayPause
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          handlePause={handlePauseClick}
          handlePlay={handlePlayClick}
        />
      </div>
      <Link to={`/songs/${song?.hub?.actions?.[0].id}`} className="w-2/12">
        <BsInfoCircle
          size={18}
          className="w-[105%] smooth-transition hover:scale-105"
        />
      </Link>
    </div>
  );
};

export default SongCard;
