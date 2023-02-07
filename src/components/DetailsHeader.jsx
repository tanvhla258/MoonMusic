import { Link } from "react-router-dom";
import { logo } from "../assets";
import Loader from "./Loader";

const DetailsHeader = ({ artistId, artistData, songData }) => {
  const renderArtistData = artistData?.attributes;
  const renderSongData = songData?.attributes;
  return (
    <div className="relative w-full flex flex-col">
      <div className="bg-white h-28 w-full">
        <div className="absolute inset-0 flex items-center">
          <img
            src={
              artistId
                ? renderArtistData.artwork?.url
                    .replace("{w}", "500")
                    .replace("{h}", "500")
                : renderSongData?.artwork?.url
                    .replace("{w}", "500")
                    .replace("{h}", "500")
            }
            alt="No background"
            className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsHeader;
