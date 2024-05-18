import React, { useEffect, useRef } from "react";

const VideoBackground = ({ videoPath }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    // Auto play, mute, and loop the video when it's ready
    const handleCanPlay = () => {
      video.play();
      video.muted = true;
      video.loop = true;
    };

    // Add event listener to handle video playback once it can play
    video.addEventListener("canplay", handleCanPlay);

    // Clean up event listener when component unmounts
    return () => {
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={process.env.PUBLIC_URL + videoPath}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        objectFit: "cover",
        zIndex: -1,
      }}
      autoPlay
      muted
      loop
    />
  );
};

export default VideoBackground;
