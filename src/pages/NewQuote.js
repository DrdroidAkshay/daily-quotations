import QuoteForm from "../components/quotes/QuoteForm";
const NewQuote = () => {
  const addQuoteHandler = (quotedetails) => {
    console.log(quotedetails.author, quotedetails.text);
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};
export default NewQuote;
