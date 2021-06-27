import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <Switch>
      <Route path="/quotes" exact></Route>
      <Route path="/quotes/:quoteId" exact></Route>
      <Route path="/new-quote" exact></Route>
    </Switch>
  );
}

export default App;
