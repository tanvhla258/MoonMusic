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
const shortcutIcons = [
  <FcMusic />,
  <FcGlobe />,
  <FcVip />,
  <FcPicture />,
  <FcLike />,
  <FcRating />,
];

const TopPlay = ({ getList }) => {
  const { data, isFetching, error } = useGetChartListsQuery();

  if (isFetching) return <Loader />;
  console.log(data);
  return (
    <div className="flex px-6 gap-6 flex-col">
      <h1 className="text-slate-900 text-2xl font-semibold">Shortcuts</h1>
      <div className="flex  gap-3 h-40 overflow-scroll hide-scrollbar flex-wrap">
        {data?.global.genres.slice(10, 16).map((genres, i) => {
          return (
            <div
              className="px-4 hover:cursor-pointer smooth-transition hover:drop-shadow-md py-2 gap-1 w-30  h-10 font-medium flex items-center  truncate rounded-3xl bg-white cursor-pointer"
              onClick={() => {
                getList(genres.listid);
              }}
              key={i}
            >
              {shortcutIcons[i]}
              {genres.name}
            </div>
          );
        })}
      </div>

      <h1 className="text-slate-900 text-2xl font-semibold">Fav Artists</h1>
      <div className="">
        <Artist />
      </div>
    </div>
  );
};

export default TopPlay;
