import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetSongDetailsQuery } from "../redux/services/shazamCore";

const SongCard = ({ index, songKey, title, subtitle }) => {
  //const { data, isFetching, error } = useGetSongDetailsQuery(songKey);
  return (
    <div className="flex my-2 gap-16 hover:bg-white  smooth-transition">
      <span className="w-1/6 text-slate-600 ">
        {index < 10 ? `0${index}` : index}
      </span>
      <span className="w-1/3 text-slate-600 ">{title}</span>
      <span className="w-1/2 text-slate-600 ">{subtitle}</span>
    </div>
  );
};

export default SongCard;
