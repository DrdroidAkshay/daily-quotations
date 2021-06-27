import { Route, Switch } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
function App() {
  return (
    <Switch>
      <Route path="/quotes" exact>
        <AllQuotes />
      </Route>
      <Route path="/quotes/:quoteId" exact>
        <QuoteDetail />
      </Route>
      <Route path="/new-quote" exact>
        <NewQuote />
      </Route>
    </Switch>
  );
}

export default App;