import * as React from "react";
import * as ReactDOM from "react-dom";

import { Root } from "./Root";

import "./index.scss";
import "../node_modules/bootstrap/dist/css/bootstrap";

function start() {
  const root = document.getElementById("root");
  ReactDOM.render(<Root />, root);
}

start();
