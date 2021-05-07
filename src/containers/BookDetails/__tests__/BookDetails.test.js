import { Route, MemoryRouter } from "react-router-dom";
import { render, waitFor } from "@testing-library/react";

import BookDetails from "../../BookDetails/BookDetails";
import apiResponse from "../../../api/books.json";

const renderComponent = (bookId) =>
  render(
    <MemoryRouter initialEntries={[`/books/0`]}>
      <Route path="/books/:booId">
        <BookDetails match={{ params: bookId }} />
      </Route>
    </MemoryRouter>
  );

test("book's title should match the title from api", async () => {
  const bookIndex = 0;
  const apiBookTitle_Idx_0 = apiResponse["books"][bookIndex].title;

  const { getByText } = renderComponent({ bookId: bookIndex });

  await waitFor(() => getByText(apiBookTitle_Idx_0));
});
