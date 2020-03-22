import React from "react";
import * as _ from "lodash";
import { useHistory } from "react-router-dom";

import images from "../assets/images/projects/*.png";
import projects from "./Projects.json";
import "./Projects.scss";

interface Project {
  id: number;
  name: string;
  tags: string[];
  detailMode: boolean;
  showFeaturedProject: boolean;
  thumbnail: string;
  detailedContent: { type: string; title: string; content: string }[];
}

interface props {
  showFeaturedProject: boolean;
}

export function Projects({ showFeaturedProject }: props) {
  const projectData: Project[] = JSON.parse(JSON.stringify(projects));
  const history = useHistory();
  const handleClick = (id, left, top) => {
    // const root = document.getElementById("root");
    // const child = document.getElementById("animateElement");
    // if (child) {
    //   root.removeChild(child[0]);
    // }
    // const animate = document.createElement("span");
    // animate.className = "animateElement";
    // animate.id = "animateElement";
    // animate.style.top = top + "px";
    // animate.style.left = left + "px";
    // root.appendChild(animate);
    // setTimeout(() => {
    //   if (child) {
    //     root.removeChild(child);
    //   }
    // }, 1500);
    history.push(`/projects/${id}`);
  };
  const projectRender = project => {
    return (
      <div
        className={
          project.detailMode ? "Project Project--clickable mb-3" : "Project"
        }
        key={project.id}
        onClick={e =>
          project.detailMode && handleClick(project.id, e.clientX, e.clientY)
        }
      >
        <div className="Project__Background" />
        <div className="Project__DetailPanel">
          <img
            src={images[project.thumbnail] || undefined}
            className="Project__Thumbnail img-fluid"
          />
          <span className="Project__TitleHolder">
            <span className="Project__Tags">{project.tags.join(", ")}</span>
            <span className="Project__Name">{project.name}</span>
          </span>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="row mt-5">
        <div className="col">
          <h2 className="Title Title--Centered">Featured Projects</h2>
          <div className="ProjectWrapper my-5">
            <div className="ProjectContainer d-flex flex-wrap justify-content-between mx-auto ">
              {projectData.map(project => {
                return showFeaturedProject
                  ? project.showFeaturedProject
                    ? projectRender(project)
                    : null
                  : projectRender(project);
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
