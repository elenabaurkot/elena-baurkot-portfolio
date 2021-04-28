import React from "react";
import "./style.css";
import HelloTypewriter from "../../components/HelloTypewriter";
import FullStackTypewriter from "../../components/FullStackTypewriter";

function HomeScreen() {
  return (
    <div className="background">
      <main>
        <section>
          <h2 className="hello-typewriter">
            <HelloTypewriter />
          </h2>
          <h1>Elena Baurkot</h1>
          <h2 className="full-stack-typewriter">
            <FullStackTypewriter />
          </h2>
        </section>
      </main>
    </div>
  );
}

export default HomeScreen;
