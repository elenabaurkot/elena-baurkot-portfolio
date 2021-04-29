import React from "react";

function ProjectDiv(props) {
  return (
    <div className="proj-double">
      <div
        className="project-item proj-box"
        style={{
          backgroundImage: `url(${props.image})`,
          borderRadius: "15px",
        }}
      ></div>
      <div className="proj-drop proj-box">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <a href={props.site} target="_blank" className="site-btn">
          Visit Site
        </a>
      </div>
    </div>
  );
}

export default ProjectDiv;
