import React from "react";

import Spinner from "../../components/Spinner/Spinner";
import BookList from "../../components/BookList/BookList";

import { useFetch } from "../../store/customHooks";
import { endpoint } from "../../api/endpoint";

export default function BookShelf() {
  const [books, loading] = useFetch(`${endpoint}/books`);

  if (loading) return <Spinner />;

  return (
    <div role="main" className="main">
      <div className="container">
        <div className="bookshelf">
          <BookList books={books} />
        </div>
      </div>
    </div>
  );
}
