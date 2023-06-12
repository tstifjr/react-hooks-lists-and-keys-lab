import React from "react";
import ProjectItem from "./ProjectItem";
import { render } from "@testing-library/react";

function ProjectList({ projects }) {
  //console.log(projects);

  const render = projects.map(object => {
    return <ProjectItem key={object.id} name = {object.name} about={object.about} technologies={object.technologies}/>
  });


  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{render}</div>
    </div>
  );
}

export default ProjectList;
