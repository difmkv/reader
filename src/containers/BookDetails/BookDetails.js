import React from "react";
import { Link, Redirect } from "react-router-dom";

import Spinner from "../../components/Spinner/Spinner";
import Detail from "../../components/Detail/Detail";
import { useFetch } from "../../store/customHooks";
import { endpoint } from "../../api/endpoint";

export default function BookDetails({ match }) {
  const [bookDetails, loading] = useFetch(
    `${endpoint}/books/${match.params.bookId}`
  );

  if (loading) return <Spinner />;
  if (!Object.keys(bookDetails).length) return <Redirect to="/" />;

  return (
    <>
      <Link to="/" className="button back">
        Back
      </Link>
      <Detail url={match.url} {...bookDetails} />
    </>
  );
}
