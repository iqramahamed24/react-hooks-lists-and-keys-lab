import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projects.map((project)  => 
        <li key={project.id}>
          <div>
            <ProjectItem id />
            <ProjectItem name/>
            <ProjectItem about/>
            <ProjectItem technologies/>
          </div>

         
        </li>
      )} 
    
      </div>
    </div>
  );
}

export default ProjectList;
