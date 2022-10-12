import React from "react";
import captions from "../../assets/mutedVideo.vtt";

const MutedLoopingVideo = ({ sources, className }) => {
  return (
    <div className={className}>
      <video
        autoPlay={true}
        muted={true}
        loop={true}
        aria-label="Looping muted promotional video showcasing different ways our app can support your business"
      >
        {sources.map((source) => (
          <source key={source.src} src={source.src} type={source.type} />
        ))}
        <track default kind="captions" srclang="en" src={captions} />
      </video>
    </div>
  );
};

export default MutedLoopingVideo;
