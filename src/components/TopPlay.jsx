import {
  useGetChartListsQuery,
  useGetArtistQuery,
} from "../redux/services/shazamCore";
import Loader from "./Loader";
import { HiSun } from "react-icons/hi";
import { Artist } from "./Artist";
import {
  FcMusic,
  FcRating,
  FcVip,
  FcPicture,
  FcLike,
  FcGlobe,
} from "react-icons/fc";
import { FiPlusSquare } from "react-icons/fi";
const shortcutIcons = [
  <FcMusic />,
  <FcGlobe />,
  <FcVip />,
  <FcPicture />,
  <FcLike />,
  <FcRating />,
];

const TopPlay = ({ getList }) => {
  const { data: artData, isFetching: isFetchingArt } =
    useGetArtistQuery(73406786);

  if (isFetchingArt) return <Loader />;
  console.log(artData);
  const art = artData?.data[0];

  return (
    <div className="flex px-6 gap-6 flex-col">
      <h1 className="text-slate-900 text-2xl font-semibold">Fav Artists</h1>
      <div className="">
        <div className="flex hover:cursor-pointer smooth-transition hover:drop-shadow-xl  flex-col items-center  w-[240px] p-4 h-48  rounded-2xl bg-white">
          <div className="h-[70%]">
            <img
              src={art?.attributes?.artwork.url
                .replace("{w}", "200")
                .replace("{h}", "180")}
              alt=""
              className="rounded-2xl object-cover w-[200px] h-[110px]"
            />
          </div>
          <div className="w-full h-[30%] flex  items-center justify-between ">
            <div className="flex flex-col">
              <span className="font-semibold">{art?.attributes?.name}</span>
              <span className="text-slate-400 text-sm">Korean</span>
            </div>
            <FiPlusSquare size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPlay;
