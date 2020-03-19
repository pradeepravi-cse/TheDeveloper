import React from "react";

import images from "../../assets/images/projects/*.png";
import "./Projects.scss";

interface Project {
  id: number;
  name: string;
  tags: string[];
  detailMode: boolean;
  showInLandingPage: boolean;
  thumbnail: string;
}

interface props {
  projectData: Project[];
}

export function Projects({ projectData }: props) {
  const handleClick = (id, left, top) => {
    const root = document.getElementById("root");
    const child = document.getElementById("animateElement");
    if (child) {
      root.removeChild(child);
    }
    const animate = document.createElement("span");
    animate.className = "animateElement";
    animate.id = "animateElement";
    animate.style.top = top + "px";
    animate.style.left = left + "px";
    console.log(animate);
    root.appendChild(animate);
    setTimeout(() => {
      root.removeChild(child);
    });
  };
  return (
    <div className="row mt-5">
      <div className="col">
        <h2 className="Title Title--Centered">Featured Projects</h2>
        <div className="ProjectWrapper my-5">
          <div className="ProjectContainer d-flex flex-wrap justify-content-between mx-auto ">
            {projectData.map(project => {
              return project.showInLandingPage ? (
                <div className="Project mb-3" key={project.id}>
                  <div className="Project__Background" />
                  <div className="Project__DetailPanel">
                    <img
                      src={images[project.thumbnail] || undefined}
                      className="Project__Thumbnail img-fluid"
                    />
                    <span className="Project__TitleHolder">
                      <span className="Project__Tags">
                        {project.tags.join(", ")}
                      </span>
                      {/* value.join(', ')}
                      {project.tags.map(tag => (
                        <span className="Project__Tags" key={tag}>
                          {tag.join(",")}
                        </span>
                      ))} */}
                      <span
                        className="Project__Name"
                        onClick={e =>
                          project.detailMode &&
                          handleClick(project.id, e.clientX, e.clientY)
                        }
                      >
                        {project.name}
                      </span>
                    </span>
                  </div>
                </div>
              ) : null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
