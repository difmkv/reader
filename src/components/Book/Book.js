import React from "react";
import { Link } from "react-router-dom";

export default function Book({ id, author, title, cover }) {
  return (
    <Link to={`/books/${id}`} className="book">
      <img src={`/covers/${cover}.jpg`} alt={`${author} - ${title}`} />
      <h3 className="title">{title}</h3>
      <p className="author">{author}</p>
    </Link>
  );
}
