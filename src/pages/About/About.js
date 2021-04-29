import React from "react";
import "./style.css";

function About() {
  return (
    <div className="background flex about-background" id="about">
      <section id="about-section">
        <h2>What's My Story?</h2>
        <p>
          I am a full stack web developer with a passion for coding and a strong
          desire to continue expanding my knowledge and skills. I consider
          myself a team player and extremely adaptable. I am currently a
          teaching assistant in a 24-week course, where I help to lead a class
          of 35 students in learning MERN stack technologies. I also work as a
          tutor to help students gain a deeper understand of their code and
          learn best practices.
        </p>

        <p>
          I have experience creating full stack web applications using
          technologies such as React, MongoDB, mySQL, javascript, Node, Express
          and Bootstrap and can create fast and responsive sites. I am a
          problem-solver with determination to get the job done in most
          efficient way possible. I seek out challenges and am looking for a
          work environment that will not only put my current skills to the test,
          but allow me to advance them and grow as a developer.
        </p>
      </section>
    </div>
  );
}

export default About;
