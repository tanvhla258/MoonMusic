import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { setActiveSong, playPause } from "../redux/features/playerSlice";

const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid } = useParams();
  const { activeSong, iaPlaying } = useSelector((state) => state.player);

  return (
    <div>
      <div className="flex flex-col">
        {/* <DetailsHeader artistId ={artistId} songData={songData}/> */}

        <div className="mb-10">
          <h2>Lyrics:</h2>
        </div>
      </div>
    </div>
  );
};

export default SongDetails;
