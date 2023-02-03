import { useGetChartListsQuery } from "../redux/services/shazamCore";
import Loader from "./Loader";
import { HiSun } from "react-icons/hi";
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
  console.log(data?.global.genres);
  return (
    <div className="flex px-6 gap-6 flex-col">
      <h1 className="text-slate-900 text-2xl font-semibold">Shortcuts</h1>
      <div className="flex  gap-3 h-40  flex-wrap">
        {data?.global.genres.slice(10, 16).map((genres, i) => {
          return (
            <div
              className="px-4 py-2 gap-1 w-30  h-10 font-medium flex items-center  truncate rounded-3xl bg-white cursor-pointer"
              onClick={() => {
                getList(genres.listid);
              }}
            >
              {shortcutIcons[i]}
              {genres.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopPlay;
