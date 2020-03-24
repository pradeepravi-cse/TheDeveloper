import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { LandingPage } from "./LandingPage/LandingPage";
import { Projects } from "~/Projects";
import { ProjectDetail } from "./Projects";

export function Root() {
  return (
    <>
      <span
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 9999,
          background: "#FFF9C4",
          textAlign: "center",
          fontSize: "12px"
        }}
      >
        Website Work in Process!
      </span>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/projects" component={Projects} />
          <Route path="/projects/:id" component={ProjectDetail} />
        </Switch>
      </Router>
    </>
  );
}
