import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "Pages/Home";
import Services from "Pages/Services";
import Contact from "Pages/Contact";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/services">
        <Services />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
    </Switch>
  );
};

export default Routes;
