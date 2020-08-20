import React from "react";
import { Switch, Route } from "react-router-dom";

const Home = React.lazy(() => import("../Pages/Home"));
const Services = React.lazy(() => import("../Pages/Services"));
const Contact = React.lazy(() => import("../Pages/Contact"));
const Service = React.lazy(() => import("../Pages/Service"));

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/services">
        <Services />
      </Route>
      <Route exact path="/services/:serviceName">
        <Service />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
    </Switch>
  );
};

export default Routes;
