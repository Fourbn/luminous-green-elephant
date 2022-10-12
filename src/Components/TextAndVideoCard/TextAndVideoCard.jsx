import React from "react";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

const TextAndVideoCard = ({ content }) => {
  const { title, text, cta_1, video } = content;

  const sources = [
    {
      src: video.webm_url,
      type: "video/webm",
    },
    {
      src: video.mp4_url,
      type: "video/mp4",
    },
  ];

  return (
    <section>
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
        <a className="button" href={cta_1.url}>
          {cta_1.text}
        </a>
      </div>
      <VideoPlayer sources={sources} />
    </section>
  );
};

export default TextAndVideoCard;
