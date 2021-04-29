import React from "react";
import "./style.css";
import HelloTypewriter from "../../components/HelloTypewriter";
import FullStackTypewriter from "../../components/FullStackTypewriter";

function HomeScreen() {
  return (
    <div className="background flex home-background" id="home">
      <main>
        <section>
          <h2 className="hello-typewriter">
            <HelloTypewriter />
          </h2>
          <h1 id="main-page-header">Elena Baurkot</h1>
          <h3 className="full-stack-typewriter mt-3">
            <FullStackTypewriter />
          </h3>
        </section>
      </main>
    </div>
  );
}

export default HomeScreen;
