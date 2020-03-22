import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { LandingPage } from "./LandingPage/LandingPage";
import { ProjectDetail } from "./Components/Projects/ProjectDetail";

export function Root() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/projects/:id" component={ProjectDetail} />
      </Switch>
    </Router>
  );
}
