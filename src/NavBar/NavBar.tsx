import React from "react";
import logo from "~/assets/images/logo.png";

import "./NavBar.scss";

export function NavBar() {
  return (
    <div className="Navigation">
      <a href="#" className="Navigation__Brand">
        <img src={logo} className="img-fluid" alt="" />
      </a>
    </div>
  );
}
