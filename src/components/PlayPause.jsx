const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) =>
  isPlaying && activeSong?.title === song.title ? (
    <div className="z-10 h-full  absolute w-full  " onClick={handlePause}></div>
  ) : (
    <div
      className="z-10   h-full absolute w-full   "
      onClick={handlePlay}
    ></div>
  );

export default PlayPause;
