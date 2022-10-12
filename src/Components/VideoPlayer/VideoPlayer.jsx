import React from "react";

const VideoPlayer = ({ sources, className }) => {
  return (
    <div className={className}>
      <video autoPlay={true} muted={true} loop={true} >
        {sources.map((source) => (
          <source key={source.src} src={source.src} type={source.type} />
        ))}
      </video>
    </div>
  );
};

export default VideoPlayer;
