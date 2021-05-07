import React from "react";

export default function ParagraphList({ paragraphs = [] }) {
  return (
    <>
      {paragraphs.map((textNode, key) => (
        <p key={key}>{textNode}</p>
      ))}
    </>
  );
}
