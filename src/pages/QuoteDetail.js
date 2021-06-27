import React from "react";
import { Route, useParams, Link } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "1", author: "Akshay", text: "Learning React is fun." },
  { id: "2", author: "Shiva", text: "Learning HTML is fun." },
  { id: "3", author: "Kriss", text: "Learning JAVA is fun." },
];

const QuoteDetail = () => {
  const params = useParams();
  console.log(params.quoteId);
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  console.log(quote);
  if (!quote) {
    return <p>No quote found</p>;
  }
  return (
    <React.Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </React.Fragment>
  );
};
export default QuoteDetail;
