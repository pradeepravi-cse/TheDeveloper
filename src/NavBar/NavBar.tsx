import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import logos from "../assets/images/*.png";

import "./NavBar.scss";

interface props {
  darkmode?: boolean;
  enableBack?: boolean;
  backCallBack?: () => void;
}

export function NavBar({ darkmode, enableBack, backCallBack }: props) {
  return (
    <div className="Navigation">
      <div className="row w-100">
        <div className="col d-flex align-items-center">
          {enableBack && (
            <span onClick={backCallBack} className="Navigation__Back">
              {
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  style={{ fontSize: "20px" }}
                />
              }
            </span>
          )}
          <Link to="/" className="Navigation__Brand">
            <img
              src={darkmode ? logos["logo"] : logos["logo-dark"]}
              className="img-fluid"
              alt=""
            />
          </Link>
          <div className=" d-flex  w-100 justify-content-end mr-2">
            <Link
              to="/"
              className={
                darkmode ? "Navigation__Link text-white" : "Navigation__Link"
              }
            >
              Home
            </Link>
            <Link
              to="/Projects/"
              className={
                darkmode ? "Navigation__Link text-white" : "Navigation__Link"
              }
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
