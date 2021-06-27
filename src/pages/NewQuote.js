import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
const NewQuote = () => {
  const history = useHistory();
  const addQuoteHandler = (quotedetails) => {
    console.log(quotedetails.author, quotedetails.text);

    history.push("./quotes");
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};
export default NewQuote;
