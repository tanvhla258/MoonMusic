import { useParams } from "react-router-dom";
import { Loader, Error, SongCard } from "../components";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetSongBySearchQuery } from "../redux/services/shazamCore";
import { useSelector } from "react-redux";
const Search = () => {
  const { searchTerm } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongBySearchQuery(searchTerm);
  if (isFetching) return <Loader title={`Searching for ${searchTerm}`} />;
  if (error || data.length === 0) return <Error />;
  const songs = data?.tracks.hits?.map((song, i) => song.track);
  return (
    <div>
      <div className="flex flex-col">
        <h2 className="font-bold text-3xl text-left mt-4 mb-10">
          Search results for {searchTerm}
        </h2>
        <div className=" sm:justify-start gap-8 h-[280px] ">
          {songs?.map((song, i) => {
            return (
              <SongCard
                song={song}
                index={i}
                key={song?.key}
                activeSong={activeSong}
                isPlaying={isPlaying}
                data={song}
              ></SongCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Search;
/* */
