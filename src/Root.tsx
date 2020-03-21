import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { LandingPage } from "./LandingPage/LandingPage";
import { ProjectDetail } from "./Components/Projects/ProjectDetail";

export function Root() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/projects/:id">
          <ProjectDetail />
        </Route>
      </Switch>
    </Router>
  );
}
