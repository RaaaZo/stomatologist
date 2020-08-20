import React, { Suspense } from "react";
import MainTemplate from "templates/MainTemplate";
import Routes from "routes/Routes";
import NavigationTemplate from "templates/NavigationTemplate";
import { BrowserRouter as Router } from "react-router-dom";
import DataContextProvider from "context/DataContext";
import LoadingIndicator from "components/shared/LoadingIndicator/LoadingIndicator";
import ScrollToTop from "hooks/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MainTemplate>
        <NavigationTemplate />
        <DataContextProvider>
          <Suspense fallback={<LoadingIndicator />}>
            <Routes />
          </Suspense>
        </DataContextProvider>
      </MainTemplate>
    </Router>
  );
}

export default App;
