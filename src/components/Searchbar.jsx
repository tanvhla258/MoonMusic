import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`search/${searchTerm}`);
  };
  return (
    <div className="bg-white mr-8 mt-2 rounded-3xl">
      <form
        autoComplete="off"
        className=" py-1 text-slate-400 focus-within:text-slate-600"
        onSubmit={handleSubmit}
      >
        <label htmlFor="search-field" className="sr-only">
          Search all songs
        </label>
        <div className="flex flex-row items-center  justify-start">
          <FiSearch className="w-5 h-5 ml-4" />
          <input
            type="search"
            name="search-field"
            autoComplete="off"
            id="search-field"
            placeholder="Search for artists, songs and...."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            className="flex-1 bg-white outline-none rounded-3xl text-sm placeholder:text-slate-400 text-black px-4 py-1"
          />
        </div>
      </form>
    </div>
  );
};
export default Searchbar;
