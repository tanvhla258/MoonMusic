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
  <div className="flex items-center justify-around w-full max-w-xs">
    <BsArrowRepeat
      size={18}
      color={repeat ? "black" : "gray"}
      onClick={() => setRepeat((prev) => !prev)}
      className="hidden sm:block cursor-pointer"
    />
    {currentSongs?.length && (
      <MdSkipPrevious
        size={30}
        color="black"
        className="cursor-pointer"
        onClick={handlePrevSong}
      />
    )}
    {isPlaying ? (
      <BsFillPauseFill
        size={35}
        color="white"
        onClick={handlePlayPause}
        className="cursor-pointer p-1 rounded-full bg-black"
      />
    ) : (
      <BsFillPlayFill
        size={35}
        color="black"
        onClick={handlePlayPause}
        className="cursor-pointer p-1 rounded-full bg-white"
      />
    )}
    {currentSongs?.length && (
      <MdSkipNext
        size={30}
        color="#black"
        className="cursor-pointer"
        onClick={handleNextSong}
      />
    )}
    <BsShuffle
      size={18}
      color={shuffle ? "black" : "gray"}
      onClick={() => setShuffle((prev) => !prev)}
      className="hidden sm:block cursor-pointer "
    />
  </div>
);

export default Controls;
