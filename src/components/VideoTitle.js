import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[22%] px-24 absolute text-white bg-gradient-to-r from-black/80 to-transparent aspect-video w-full">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="text-lg py-6 w-1/4">{overview}</p>
      <div className="flex gap-4">
        <button className="bg-white text-black p-3 px-14 text-xl rounded-lg font-bold flex items-center gap-2 shadow-lg shadow-black/30 active:scale-95 transition-all duration-150">
          <img
            className="w-7 h-7"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGRhjS1405PRnvHgLEc4GleBMyqQoMnKO30g&s"
            alt="Play"
          />
          Play
        </button>

        <button className="bg-black text-white p-3 px-14 text-xl rounded-lg font-bold flex items-center gap-2 shadow-lg shadow-black/30 active:scale-95 transition-all duration-150">
          <img
            className="w-7 h-7 invert"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREuQJY5ekG2VoVWutUX-T6Opqgs7jR75OW2Q&s"
            alt="More Info"
          />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
