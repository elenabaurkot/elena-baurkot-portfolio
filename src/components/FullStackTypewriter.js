import React from "react";
import Typewriter from "typewriter-effect";

function FullStackTypewriter() {
  return (
    <Typewriter
      options={{
        strings: [
          "Team Player",
          "Educator",
          "Full Stack Web Developer",
          "Problem Solver",
          "Lifelong Student",
        ],
        autoStart: true,
        loop: true,
        pauseFor: 1300,
        deleteSpeed: 40,
        delay: 120,
      }}
    />
    // <Typewriter
    //   onInit={(typewriter) => {
    //     typewriter
    //       .pauseFor(6200)
    //       .typeString(`Full Stack Web Developer`)
    //       .pauseFor(1000)
    //       .deleteAll()
    //       .typeString("Problem Solver")
    //       .pauseFor(1000)
    //       .deleteAll()
    //       .typeString("Lifelong Student")
    //       .pauseFor(1000)
    //       .deleteAll()
    //       .typeString("Team Player")
    //       .pauseFor(1000)
    //       .deleteAll()
    //       .typeString("Educator")
    //       .pauseFor(1000)
    //       .deleteAll()
    //       .typeString("Full Stack Web Developer")
    //       .start()

    //   }}
    // />
  );
}

export default FullStackTypewriter;
