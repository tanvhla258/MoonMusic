import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import {
  useGetSongDetailsV2Query,
  useGetSongRecommendedQuery,
} from "../redux/services/shazamCore";

const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid, songKey } = useParams();
  const { activeSong, iaPlaying } = useSelector((state) => state.player);
  console.log(songKey);
  const { data: songData, isFetching: isFetchingDetails } =
    useGetSongDetailsV2Query(songid);

  const { data: recommendedData, isFetching: isFetchingRecommened } =
    useGetSongRecommendedQuery(songKey);

  if (isFetchingDetails || isFetchingRecommened)
    return <Loader title="Search song detail..." />;
  console.log(recommendedData);
  return (
    <div>
      <div className="flex flex-col">
        <DetailsHeader artistId="" songData={songData?.data?.[0]} />

        <div className="mb-10 mt-16">
          <h2 className="font-semibold text-lg">Lyrics:</h2>
          <p>Sorry! No lyrics found</p>
        </div>

        <div>{}</div>
      </div>
    </div>
  );
};

export default SongDetails;
