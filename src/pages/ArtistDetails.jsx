import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import {
  useGetSongRelatedQuery,
  useGetArtistQuery,
} from "../redux/services/shazamCore";
import { logo } from "../assets";

const ArtistDetails = () => {
  const dispatch = useDispatch();
  const { artistId } = useParams();
  console.log(artistId);
  const { data: artistData, isFetching: isFetchingDetails } =
    useGetArtistQuery(artistId);

  const { data: realatedSongData, isFetching: isFetchingRelatedSong } =
    useGetSongRelatedQuery(artistId);
  if (isFetchingDetails || isFetchingRelatedSong)
    return <Loader title="Search artists detail..." />;

  console.log(artistData);
  return (
    <div>
      <div className="flex flex-col">
        <DetailsHeader artistId={artistId} artistData={artistData?.data?.[0]} />

        <div></div>
      </div>
    </div>
  );
};

export default ArtistDetails;
