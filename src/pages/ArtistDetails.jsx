import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  DetailsHeader,
  Error,
  Loader,
  RelatedSongs,
  SongBar,
} from "../components";
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
  console.log(realatedSongData.data);

  return (
    <div>
      <div className="flex flex-col">
        <DetailsHeader artistId={artistId} artistData={artistData?.data?.[0]} />
        <div className="mt-16 mx-4 ">
          <h1 className="text-lg font-semibold my-2">
            {artistData?.data[0].attributes.name} album
          </h1>
          <div className="mr-10 h-80 overflow-y-auto hide-scrollbar">
            {realatedSongData?.data.map((song, i) => (
              <SongBar artistId={artistId} song={song} i={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistDetails;
