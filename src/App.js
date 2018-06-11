import React from "react";
import "./App.css";
import Main from "./pages/Main";
import User from "./pages/User"
import { Provider } from "react-redux";
import { Switch, Route, HashRouter as Router } from "react-router-dom";

const Routes = ({store}) => {
  return (
    <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/user" component={User} />
      </Switch>
    </Router>
    </Provider>
  );
};

export default Routes;