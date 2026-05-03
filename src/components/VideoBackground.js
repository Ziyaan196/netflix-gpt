import { useSelector } from "react-redux";
import useMovieTrailor from "../hooks/useMovieTrailor";

const VideoBackground = ({ movieId }) => {
  const trailorVideo = useSelector((store) => store.movies?.trailorVideo);
  useMovieTrailor(movieId);

  return (
    <div className="w-full aspect-video overflow-hidden">
      <iframe
        key={trailorVideo?.key}
        className="w-[300%] h-[100%] ml-[-100%]"
        src={"https://www.youtube.com/embed/" + trailorVideo?.key + "?&controls=0&autoplay=1&mute=1&loop=1&enablejsapi=1&modestbranding=0&playlist=" + trailorVideo?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default VideoBackground;




<iframe 
title="YouTube video player" 
frameBorder="0" 
allow="accelerometer; 
autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
referrerPolicy="strict-origin-when-cross-origin" 
allowFullScreen></iframe>