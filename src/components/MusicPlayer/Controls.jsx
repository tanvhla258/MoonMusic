import React from "react";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import {
  BsArrowRepeat,
  BsFillPauseFill,
  BsFillPlayFill,
  BsShuffle,
} from "react-icons/bs";

const Controls = ({
  isPlaying,
  repeat,
  setRepeat,
  shuffle,
  setShuffle,
  currentSongs,
  handlePlayPause,
  handlePrevSong,
  handleNextSong,
}) => (
  <div className="flex items-center justify-between md:w-56 lg:w-52 2xl:w-80">
    <BsArrowRepeat
      size={20}
      color={repeat ? "black" : "gray"}
      onClick={() => setRepeat((prev) => !prev)}
      className="hidden sm:block cursor-pointer "
    />
    {currentSongs?.length && (
      <MdSkipPrevious
        size={24}
        color="black"
        className="cursor-pointer"
        onClick={handlePrevSong}
      />
    )}
    {isPlaying ? (
      <BsFillPauseFill
        size={30}
        color="white"
        onClick={handlePlayPause}
        className="cursor-pointer p-2 bg-black rounded-full"
      />
    ) : (
      <BsFillPlayFill
        size={30}
        color="black"
        onClick={handlePlayPause}
        className="cursor-pointer"
      />
    )}
    {currentSongs?.length && (
      <MdSkipNext
        size={24}
        color="black"
        className="cursor-pointer"
        onClick={handleNextSong}
      />
    )}
    <BsShuffle
      size={20}
      color={shuffle ? "black" : "gray"}
      onClick={() => setShuffle((prev) => !prev)}
      className="hidden sm:block cursor-pointer "
    />
  </div>
);

export default Controls;
