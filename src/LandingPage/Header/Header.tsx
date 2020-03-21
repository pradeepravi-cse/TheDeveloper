import React from "react";

import { NavBar } from "~/NavBar/NavBar";

import backgroundvideo from "./header_back.mp4";
import "./Header.scss";

export function Header() {
  return (
    <div className="Header">
      <div className="Header__Content">
        <div className="Header_Banner Intro d-flex flex-column align-items-center justify-content-center">
          <div className="row">
            <div className="col">
              <p className="Intro__Quote mb-5">
                Technology over technique produces <br />
                emotionless products
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col flex-column flex-md-row d-flex justify-content-center align-items-center">
              <span className="mx-5 Intro__Portfolio">PORTFOLIO</span>
              <span className="mx-5 Intro__Name">PRADEEP KUMAR</span>
            </div>
          </div>
          <div className="ScrollIndicator mt-5">
            <div className="ScrollIndicator__Dots"></div>
          </div>
        </div>
      </div>

      <video autoPlay={true} muted={true} loop={true} id="worldvideo">
        <source src={backgroundvideo} type="video/mp4" />
      </video>
      <NavBar />
    </div>
  );
}
