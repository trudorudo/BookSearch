import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import SavedBooks from "./pages/SavedBooks"
import NotFound from "./pages/NotFound"
import Nav from "./components/Nav";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Books} />
          <Route  path="/saved" component={SavedBooks} />
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
