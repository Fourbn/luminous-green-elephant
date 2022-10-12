import React from "react";

const TextAndVideoCard = ({ content }) => {
  const { title, text, cta_1, video } = content;
  return (
    <section>
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
        <a className="button" href={cta_1.url}>
          {cta_1.text}
        </a>
      </div>
    </section>
  );
};

export default TextAndVideoCard;
