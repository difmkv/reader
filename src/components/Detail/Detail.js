import React from "react";
import { Link } from "react-router-dom";

export default function Detail({ author, title, cover, description, url }) {
  return (
    <div className="book-detail">
      <img alt={`${author} - ${title}`} src={`/covers/${cover}.jpg`} />
      <h3 className="title">{title}</h3>
      <p className="author">{author}</p>
      <p className="description">{description}</p>
      <Link to={`${url}/chapters/0`} className="button">
        Read
      </Link>
    </div>
  );
}
