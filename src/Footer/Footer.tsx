import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { SocialConnect } from "~/SocialConnect/SocialConnect";

export function Footer() {
  return (
    <div className="row mt-5 pt-5">
      <div className="col">
        <h2 className="Title Title--Centered">Let's Talk</h2>
        <p className="Text Text--Dark Text--Centered AboutText mx-auto">
          <FontAwesomeIcon icon={faAt} /> pradeepravi.cse@gmail.com <br />{" "}
          <FontAwesomeIcon icon={faMobileAlt} /> +91 88075 45800
        </p>
        <SocialConnect showOnMobile={true} />
      </div>
    </div>
  );
}
