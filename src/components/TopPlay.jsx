import { useGetChartListsQuery } from "../redux/services/shazamCore";
import Loader from "./Loader";

const TopPlay = ({ getList }) => {
  const { data, isFetching, error } = useGetChartListsQuery();
  if (isFetching) return <Loader />;
  console.log(data?.global.genres);
  return (
    <div className="flex gap-4 h-40 overflow-auto flex-wrap">
      {data?.global.genres.slice(10, 16).map((genres) => {
        return (
          <div
            className="px-4 py-2 w-30 h-10 font-semibold  truncate rounded-3xl bg-white cursor-pointer"
            onClick={() => {
              getList(genres.listid);
            }}
          >
            {genres.name}
          </div>
        );
      })}
    </div>
  );
};

export default TopPlay;
