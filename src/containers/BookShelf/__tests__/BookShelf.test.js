import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";

import BookShelf from "../BookShelf";
import apiResponse from "../../../api/books.json";

const apiBookTitles = new RegExp(
  apiResponse["books"].reduce((acc, curr) => [curr.title, ...acc], []).join("|")
);

test("should match all book titles from api", async () => {
  const { getByText, findAllByText } = render(
    <Router>
      <BookShelf />
    </Router>
  );

  const linkElement = getByText(/loading/i);
  expect(linkElement).toBeInTheDocument();

  const renderedTitles = await findAllByText(apiBookTitles);
  expect(renderedTitles).toHaveLength(4);
});
