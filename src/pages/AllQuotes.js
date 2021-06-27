import { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../components/hooks/use-http";
import { getAllQuotes } from "../components/lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
// const DUMMY_QUOTES = [
//   { id: "1", author: "Akshay", text: "Learning React is fun." },
//   { id: "2", author: "Shiva", text: "Learning HTML is fun." },
//   { id: "3", author: "Kriss", text: "Learning JAVA is fun." },
// ];
const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
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
  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />;
  }
  return <QuoteList quotes={loadedQuotes} />;
};
export default AllQuotes;
