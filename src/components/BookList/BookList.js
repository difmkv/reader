import React from "react";

import Book from "../Book/Book";

export default function BookList({ books = [] }) {
  return (
    <>
      {books.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          cover={book.cover}
        />
      ))}
    </>
  );
}
