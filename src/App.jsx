import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { Searchbar, Sidebar, MusicPlayer, TopPlay } from "./components";
import {
  ArtistDetails,
  TopArtists,
  AroundYou,
  Discover,
  Search,
  SongDetails,
  TopCharts,
} from "./pages";

const App = () => {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="relative flex font-mono ">
      <Sidebar />
      <div className="flex-1 w-10/12  flex flex-col bg-gray">
        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className=" h-fit  w-full ">
            <div className="w-full">
              <Searchbar />
            </div>
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/around-you" element={<AroundYou />} />
              <Route path="/artists/:artistId" element={<ArtistDetails />} />
              <Route path="/songs/:songid/:songKey" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
          </div>
          <div className="xl:sticky relative  top-0 h-fit">
            <TopPlay />
          </div>
        </div>

        {activeSong?.title && (
          <div className="absolute w-full h-28 bottom-0 left-0 right-0 mt-7 drop-shadow-md border-2 border-slate-300 flex animate-slideup bg-white backdrop-blur-lg rounded-t-3xl">
            <MusicPlayer />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
