import React from "react";

const TextAndVideoCard = ({ content }) => {
  console.log(content);
  return (
    <section>
      <h2>{content.title}</h2>
    </section>
  );
};

export default TextAndVideoCard;
