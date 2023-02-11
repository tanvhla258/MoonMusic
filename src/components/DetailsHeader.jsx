import { Link } from "react-router-dom";
import { logo } from "../assets";
import Loader from "./Loader";

const DetailsHeader = ({ artistId, artistData, songData }) => {
  const renderArtistData = artistData?.attributes;
  console.log(renderArtistData);
  console.log(songData);

  return (
    <div className="relative w-full flex flex-col mt-10">
      <div className="bg-gradient-to-br from-slate-500 to-gray h-28 w-full">
        <div className=" absolute inset-0 flex items-center">
          <img
            src={
              artistId
                ? renderArtistData.artwork?.url
                    .replace("{w}", "500")
                    .replace("{h}", "500")
                : songData?.attributes?.artwork?.url
                    .replace("{w}", "500")
                    .replace("{h}", "500")
            }
            alt="No background"
            className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl"
          />
          <div className="flex flex-col gap-2 ml-2">
            <h1 className="text-lg font-semibold">
              {songData?.attributes?.name}
            </h1>
            <Link to={`/artists/${songData?.relationships.artists.data[0].id}`}>
              <span className="text-slate-600 hover:underline smooth-transition border-1">
                {songData?.attributes?.artistName}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsHeader;
