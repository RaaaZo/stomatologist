import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "Pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
