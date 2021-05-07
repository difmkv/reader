import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "../../components/Header/Header";
import BookShelf from "../BookShelf/BookShelf";

const BookDetails = lazy(() => import("../BookDetails/BookDetails"));
const BookChapters = lazy(() => import("../BookChapters/BookChapters"));

export default function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route
            path="/books/:bookId/chapters/:chapterId"
            component={BookChapters}
          ></Route>
          <Route path="/books/:bookId" component={BookDetails}></Route>
          <Route path="/" component={BookShelf}></Route>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
}
