import React from "react";
import { Link, Redirect } from "react-router-dom";

import ParagraphList from "../../components/ParagraphList/ParagraphList";
import Spinner from "../../components/Spinner/Spinner";

import { endpoint } from "../../api/endpoint";
import { useFetch } from "../../store/customHooks/useFetch";

export default function BookChapters({ match }) {
  const { bookId, chapterId } = match.params;

  const [data, loading] = useFetch(
    `${endpoint}/books/${bookId}/chapters/${chapterId}`
  );

  if (loading) return <Spinner />;
  if (!data.length) return <Redirect to="/" />;

  const { title, author, chapterTitle, chaptersLength, paragraphs } = data[0];

  const nextChapterId = +chapterId + 1;

  let nextPathLink =
    chaptersLength > nextChapterId
      ? `/books/${bookId}/chapters/${nextChapterId}`
      : "/";

  return (
    <div className="chapter">
      <Link to="/" className="button back"></Link>
      <span className="title">{title} </span>
      <span className="author">{author}</span>
      <h1>{chapterTitle}</h1>
      <ParagraphList title={title} author={author} paragraphs={paragraphs} />
      <Link to={nextPathLink} className="button next">
        Next
      </Link>
    </div>
  );
}
