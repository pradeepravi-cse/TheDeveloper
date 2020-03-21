import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faMobileAlt } from "@fortawesome/free-solid-svg-icons";

import { SocialConnect } from "~/SocialConnect/SocialConnect";
import { IconImage } from "~/Components/IconImage/IconImage";
import { Projects } from "~/Components/Projects/Projects";
import projects from "~/Projects.json";
import expertise from "../assets/images/expertise/*.png";

import { Header } from "./Header/Header";
import jsonImages from "./images.json";

import "./LandingPage.scss";

export function LandingPage() {
  const images = Array.from(jsonImages);
  const projectData = Array.from(projects) as any;
  console.log(expertise);
  return (
    <>
      <Header />
      <SocialConnect />
      <div className="mt-5 pt-5" style={{ margin: "0 40px" }}>
        <div className="row">
          <div className="col">
            <h2 className="Title Title--Centered">About Me</h2>
            <p className="Text Text--Primary Text--Centered AboutText mx-auto">
              Experienced Web Developer. Skilled in React Web development,
              Single Page Applications using various frameworks, Corporate Web
              designing, User centred design (UCD). Strong information
              technology professional with a Bachelor of Engineering (B.E.)
              focused in Computer Science Engineering from C. Abdul Hakeem
              College of Engineering and Technology.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row my-5 py-5">
            <div className="col">
              <h2 className="Title Title--Centered">Expertise In</h2>
              <div className="row">
                <div className="col-sm-12 col-md-4">
                  <div className="Expertise__Card d-flex flex-column mx-auto">
                    <img
                      src={expertise["brand-design"]}
                      className="Expertise__image img-fluid"
                    />
                    <p className="Expertise__title">Brand Design</p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="Expertise__Card d-flex flex-column mx-auto">
                    <img
                      src={expertise["spa"]}
                      className="Expertise__image img-fluid"
                    />
                    <p className="Expertise__title">Single Page Application</p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="Expertise__Card d-flex flex-column mx-auto">
                    <img
                      src={expertise["uiux"]}
                      className="Expertise__image img-fluid"
                    />
                    <p className="Expertise__title">UI/UX &amp; Web Design</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-5 py-5">
          <div className="col">
            <h2 className="Title Title--Centered">Technology &amp; Tools</h2>
            <div className="ImageContainer d-flex flex-wrap justify-content-center">
              {images.map(images => (
                <IconImage
                  image={images["image"]}
                  imageHover={images["imageHover"]}
                  imageName={images["imageName"]}
                  key={images["imageName"]}
                />
              ))}
            </div>
          </div>
        </div>
        {projects && <Projects projectData={projectData} />}
        <div className="row mt-5 pt-5">
          <div className="col">
            <h2 className="Title Title--Centered">Let's Talk</h2>
            <p className="Text Text--Primary Text--Centered AboutText mx-auto">
              <FontAwesomeIcon icon={faAt} /> pradeepravi.cse@gmail.com <br />{" "}
              <FontAwesomeIcon icon={faMobileAlt} /> +91 88075 45800
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
