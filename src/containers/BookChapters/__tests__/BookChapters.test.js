import { Route, MemoryRouter } from "react-router-dom";
import { render, waitFor } from "@testing-library/react";

import BookChapters from "../../BookChapters/BookChapters";

const renderComponent = (bookId, chapterId) =>
  render(
    <MemoryRouter initialEntries={[`/books/1/chapters/0`]}>
      <Route path="/books/:booId/chapters/:chapterId">
        <BookChapters match={{ params: bookId, chapterId }} />
      </Route>
    </MemoryRouter>
  );

test("nextBtn should have next chapter's path", async () => {
  const { getByText, getByRole } = renderComponent({
    bookId: 1,
    chapterId: 0,
  });

  await waitFor(() => getByText("Story of the Door"));

  const nextBtn = getByRole("link", { name: "Next" });
  expect(nextBtn).toHaveAttribute("href", "/books/1/chapters/1");
});

test("nextBtn should redirect home on last chapter", async () => {
  const { getByText, getByRole } = renderComponent({
    bookId: 1,
    chapterId: 9,
  });

  await waitFor(() => getByText("Henry Jekyll's Full Statement of the Case"));

  const nextBtn = getByRole("link", { name: "Next" });
  expect(nextBtn).toHaveAttribute("href", "/");
});
