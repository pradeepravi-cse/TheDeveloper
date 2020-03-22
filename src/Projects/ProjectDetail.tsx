import React from "react";
import { useParams, useHistory } from "react-router-dom";
import * as _ from "lodash";

import { NavBar } from "~/NavBar/NavBar";
import projects from "./Projects.json";
import images from "../assets/images/projects/*.jpg";

import "./ProjectDetail.scss";
interface DetailedContent {
  type: string;
  title: string;
  content: string;
}
interface Project {
  id: number;
  name: string;
  tags: string[];
  detailMode: boolean;
  showFeaturedProject: boolean;
  thumbnail: string;
  detailedContent: DetailedContent[];
}

export function ProjectDetail() {
  const { id } = useParams();
  const history = useHistory();
  const projectData: Project[] = JSON.parse(JSON.stringify(projects));
  const filteredData: Project = _.filter(
    projectData,
    (project: Project) => project.id.toString() == id
  )[0];
  const detailedContents = filteredData.detailedContent;
  const goBack = () => {
    history.goBack();
  };
  return (
    <div className="ProjectDetail">
      <NavBar logoDark={true} enableBack={true} backCallBack={goBack} />
      <div className="row mt-5">
        <div className="col">
          <h1 className="ProjectTitle">{filteredData.name}</h1>
          {_.map(detailedContents, (detailedContent: DetailedContent) => {
            const { title, type, content } = detailedContent;
            if (type == "image") {
              return (
                <div key={content}>
                  {title && <span className="Title">title</span>}{" "}
                  <img
                    src={images[content]}
                    className="img-fluid ProjectDetail__image"
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
