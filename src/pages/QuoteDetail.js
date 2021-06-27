import React from "react";
import { Route, useParams, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "1", author: "Akshay", text: "Learning React is fun." },
  { id: "2", author: "Shiva", text: "Learning HTML is fun." },
  { id: "3", author: "Kriss", text: "Learning JAVA is fun." },
];

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();
  console.log(params.quoteId);
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  console.log("hi", match);
  if (!quote) {
    return <p>No quote found</p>;
  }
  return (
    <React.Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
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
