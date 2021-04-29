import React from "react";
import ProjectDiv from "../../components/ProjectDiv";
import "./style.css";
import projects from "./projects.json";

function Portfolio() {
  return (
    <section className="background portfolio-background" id="portfolio">
      <div className="small-double-border">
        <h2 id="portfolio-header">Portfolio</h2>
      </div>
      <div className="projectContainer">
        {projects.map((project) => (
          <ProjectDiv key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
