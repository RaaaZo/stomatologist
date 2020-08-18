import React from "react";
import MainTemplate from "templates/MainTemplate";
import Routes from "routes/Routes";
import NavigationTemplate from "templates/NavigationTemplate";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <MainTemplate>
        <NavigationTemplate />
        <Routes />
      </MainTemplate>
    </Router>
  );
}

export default App;
