import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import { useGetSongDetailsQuery } from "../redux/services/shazamCore";
const Discover = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();
  if (isFetching) return <Loader></Loader>;
  if (error) return <Error />;

  return (
    <div className="flex flex-col font-mono ">
      <div className="w-full flex justify-between items-center mt-4 mb-10 sm:flex-row">
        <div className="w-full">
          <span className="text-slate-400 text-sm w-full">What's hot</span>
          <div className="flex justify-between items-end">
            <h1 className="text-slate-900 text-3xl font-semibold">Trending</h1>
            <span className="text-slate-400 text-sm leading-4">More</span>
          </div>
        </div>
      </div>

      <div
        className=" relative rounded-2xl h-40 w-full mb-4 bg-no-repeat bg-cover bg-bottom"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1505159940484-eb2b9f2588e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")',
        }}
      >
        <div className="  w-full absolute bg-gradient-to-r from-slate-100 to-slate-300 rounded-2xl h-full opacity-50"></div>
        <span className=" top-5 left-5 z-1 absolute text-slate-400 text-sm leading-4">
          Artist
        </span>
        <h1 className="z-1 top-8 left-4  absolute text-slate-900 text-3xl font-semibold">
          On Top
        </h1>
        <h1 className=" z-1 top-16 left-4  absolute text-slate-900 text-3xl font-semibold">
          Of The World
        </h1>
        <button className="z-1 text-white font-semibold bottom-3 left-4 absolute bg-black border-2 border-black px-5 py-1 rounded-3xl">
          PLAY
        </button>
        <button className="z-1 text-black font-semibold bottom-3 left-28 absolute bg-transparent border-2 border-black px-5 py-1 rounded-3xl">
          FOLLOW
        </button>

        <span className="text-slate-300 bottom-6 right-2 z-1 absolute text-sm leading-4">
          Monthly Listener
        </span>
        <span className="text-slate-100 bottom-2 right-2 z-1 absolute  leading-4">
          32000
        </span>
      </div>

      <div className="h-[400px]   w-full">
        <div className="flex justify-between">
          <h1 className="text-slate-900 text-3xl font-semibold">My Playlist</h1>

          <span className="text-slate-400 text-sm leading-4">Show All</span>
        </div>
        <div className="mt-2 h-64 scrollbar-hide overflow-y-auto">
          <div className="flex my-1  gap-16 ">
            <span className="text-sm w-1/6 text-slate-400 ">#</span>
            <span className="text-sm w-1/3 text-slate-400 ">Title</span>
            <span className="text-sm w-1/2 text-slate-400 ">Artist</span>
          </div>
          {data?.tracks.map((song, i) => {
            return (
              <SongCard
                index={i}
                key={i}
                songKey={song.key}
                title={song.title}
                subtitle={song.subtitle}
              ></SongCard>
            );
          })}
        </div>
      </div>

      <div className="h-36 w-full bg-green-500">mEdia</div>
    </div>
  );
};

export default Discover;
