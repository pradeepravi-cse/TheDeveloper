import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faMobileAlt } from "@fortawesome/free-solid-svg-icons";

import { SocialConnect } from "~/SocialConnect/SocialConnect";
import { IconImage } from "~/Components/IconImage/IconImage";
import { Projects } from "~/Components/Projects/Projects";

import { Header } from "./Header/Header";
import jsonImages from "./images.json";
import projects from "./Projects.json";
import "./LandingPage.scss";

export function LandingPage() {
  const images = Array.from(jsonImages);
  const projectData = Array.from(projects) as any;
  console.log(projectData);
  return (
    <>
      <Header />
      <SocialConnect />
      <div className="mt-5" style={{ margin: "0 40px" }}>
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
        <div className="row mt-5">
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
        <div className="row my-5">
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
