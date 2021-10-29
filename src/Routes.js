import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Culture from "./pages/Culture";
import Article from "./pages/Article";
import Event from "./pages/Event";
import Good from "./pages/Good";
import Multimedia from "./pages/Multimedia";
import News from "./pages/News";
import Report from "./pages/Report";

import Nav from "./components/Nav";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
