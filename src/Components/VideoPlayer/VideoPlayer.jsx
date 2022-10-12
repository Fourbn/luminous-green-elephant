import React from "react";

const VideoPlayer = ({ sources, className }) => {
  return (
    <div className={className}>
      <video autoplay="true" muted="true" loop="true" >
        {sources.map((source) => (
          <source src={source.src} type={source.type} />
        ))}
      </video>
    </div>
  );
};

export default VideoPlayer;
