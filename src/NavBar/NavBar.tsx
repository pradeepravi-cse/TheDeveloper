import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import logos from "../assets/images/*.png";

import "./NavBar.scss";

interface props {
  logoDark?: boolean;
  enableBack?: boolean;
  backCallBack?: () => void;
}

export function NavBar({ logoDark, enableBack, backCallBack }: props) {
  return (
    <div className="Navigation align-items-center">
      {enableBack && (
        <span onClick={backCallBack} className="Navigatoin__Back mr-3">
          {<FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: "20px" }} />}
        </span>
      )}
      <a href="#" className="Navigation__Brand">
        <img
          src={logoDark ? logos["logo-dark"] : logos["logo"]}
          className="img-fluid"
          alt=""
        />
      </a>
    </div>
  );
}
