import React from "react";
import * as _ from "lodash";
import { useHistory, useLocation } from "react-router-dom";

import { NavBar } from "~/NavBar/NavBar";
import images from "../assets/images/projects/*.png";
import projects from "./Projects.json";
import "./Projects.scss";
import { SocialConnect } from "~/SocialConnect/SocialConnect";

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

type tags = "Web Design" | "SPA" | "UI/UX" | "Mobile App" | "Logo Design";

export function Projects({ showFeaturedProject }: props) {
  const [tags, setTags] = React.useState<{ [key in tags]: boolean }>({
    "Web Design": true,
    SPA: true,
    "UI/UX": true,
    "Mobile App": true,
    "Logo Design": true
  });
  const [isDirect, setIsDirect] = React.useState<boolean>(false);
  const { pathname } = useLocation();

  React.useEffect(() => {
    setIsDirect(pathname == "/Projects/");
  }, []);

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
    let trueNumber = 0;
    _.map(project.tags, tag => {
      if (tags[tag]) {
        trueNumber += 1;
      }
    });
    if (trueNumber == 0) {
      return null;
    }
    return (
      <div
        className={isDirect ? "col-12 col-md-4" : "col-12 col-md-6"}
        key={project.id}
      >
        <div
          className={
            project.detailMode
              ? isDirect
                ? "Project Project--clickable Project--compact mb-3"
                : "Project Project--clickable mb-3"
              : isDirect
              ? "Project Project--compact"
              : "Project mb-3"
          }
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
      </div>
    );
  };
  const CheckedAll = _.every(tags);

  const toogleFilter = key => {
    if (key == "all") {
      _.map(tags, (value, k) => {
        setTags(t => {
          return { ...t, [k]: true };
        });
      });
    } else {
      if (_.every(tags)) {
        _.map(tags, (value, k) => {
          if (k !== key) {
            setTags(t => {
              return { ...t, [k]: !tags[k] };
            });
          }
        });
      } else {
        setTags(t => {
          return { ...t, [key]: !tags[key] };
        });
      }
    }
  };

  return (
    <>
      <SocialConnect />
      <div className="row mt-5">
        <div className="col">
          {isDirect && <NavBar />}
          <h2 className="Title Title--Centered" hidden={isDirect}>
            Featured Projects
          </h2>
          <div className="ProjectWrapper my-5">
            <div className="ProjectContainer d-flex flex-wrap mx-auto ">
              <div className="ProjectTags mb-5 mx-auto">
                <span
                  className={
                    CheckedAll
                      ? "ProjectTags__Pills ProjectTags__Pills--active"
                      : "ProjectTags__Pills"
                  }
                  onClick={() => toogleFilter("all")}
                >
                  All
                </span>
                {_.map(_.keysIn(tags), (key: string) => (
                  <span
                    className={
                      tags[key]
                        ? CheckedAll
                          ? "ProjectTags__Pills"
                          : "ProjectTags__Pills ProjectTags__Pills--active"
                        : "ProjectTags__Pills"
                    }
                    onClick={() => toogleFilter(key)}
                    key={key}
                  >
                    {key}
                  </span>
                ))}
              </div>
              <div className="row w-100">
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
      </div>
    </>
  );
}
