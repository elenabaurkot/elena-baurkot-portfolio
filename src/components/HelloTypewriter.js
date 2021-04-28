import React from "react";
import Typewriter from "typewriter-effect";

function HelloTypewriter() {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .pauseFor(400)
          .typeString(`Hello World,`)
          .pauseFor(500)
          .typeString(" I am")
          .start();
      }}
    />
  );
}

export default HelloTypewriter;
