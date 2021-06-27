import QuoteList from "../components/quotes/QuoteList";
const DUMMY_QUOTES = [
  { id: "1", author: "Akshay", text: "Learning React is fun." },
  { id: "2", author: "Shiva", text: "Learning HTML is fun." },
  { id: "3", author: "Kriss", text: "Learning JAVA is fun." },
];
const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};
export default AllQuotes;
