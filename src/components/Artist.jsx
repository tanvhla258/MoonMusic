import { logo } from "../assets";
import { useGetArtistQuery } from "../redux/services/shazamCore";
import Loader from "./Loader";
import { FiPlusSquare } from "react-icons/fi";
export const Artist = () => {
  const { data, isFetching, error } = useGetArtistQuery(73406786);
  if (isFetching) return <Loader />;
  console.log(data);
  const art = data?.data[0];
  return (
    <div className="flex hover:cursor-pointer smooth-transition hover:drop-shadow-xl  flex-col items-center  w-[240px] p-4 h-48  rounded-2xl bg-white">
      <div className="h-[70%]">
        <img
          src={art?.attributes.artwork.url
            .replace("{w}", "200")
            .replace("{h}", "180")}
          alt=""
          className="rounded-2xl object-cover w-[200px] h-[110px]"
        />
      </div>
      <div className="w-full h-[30%] flex  items-center justify-between ">
        <div className="flex flex-col">
          <span className="font-semibold">{art?.attributes.name}</span>
          <span className="text-slate-400 text-sm">Korean</span>
        </div>
        <FiPlusSquare size={20} />
      </div>
    </div>
  );
};
