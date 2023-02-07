import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetSongDetailsV2Query } from "../redux/services/shazamCore";
import { logo } from "../assets";

const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid } = useParams();
  const { activeSong, iaPlaying } = useSelector((state) => state.player);
  const { data: songData, isFethcing: isFetchingDetails } =
    useGetSongDetailsV2Query(songid);

  if (isFetchingDetails) return <Loader />;
  return (
    <div>
      <div className="flex flex-col">
        <DetailsHeader artistId="" songData={songData?.data[0]} />

        <div className="mb-10 mt-16">
          <h2 className="font-semibold text-lg">Lyrics:</h2>
          <p>Sorry! No lyrics found</p>
        </div>
      </div>
    </div>
  );
};

export default SongDetails;
