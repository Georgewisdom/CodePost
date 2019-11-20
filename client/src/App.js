import React, { Fragment } from "react";
import Welcome from "../src/components/Welcome/welcome";
import Navbar from "../src/components/Navbar/navBar";
import Footer from "../src/components/footer/footer";
import Routes from "../src/components/routes/Routes";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route component={Routes} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
