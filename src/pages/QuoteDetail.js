import React, { useEffect } from "react";
import { Route, useParams, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../components/hooks/use-http";
import { getSingleQuote } from "../components/lib/api";

const DUMMY_QUOTES = [
  { id: "1", author: "Akshay", text: "Learning React is fun." },
  { id: "2", author: "Shiva", text: "Learning HTML is fun." },
  { id: "3", author: "Kriss", text: "Learning JAVA is fun." },
];

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();
  const { quoteId } = params;
  console.log(params.quoteId);
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);
  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <div className="centered focused">{error}</div>;
  }
  if (!loadedQuote.text) {
    return <p>No quote found</p>;
  }
  return (
    <React.Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={match.url} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.url}/comments`}>
        <Comments />
      </Route>
    </React.Fragment>
  );
};
export default QuoteDetail;
