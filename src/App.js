import React from "react";
import HomeScreen from "./pages/HomeScreen/HomeScreen";
import SiteNav from "./components/SiteNav";
import Portfolio from "./pages/Portfolio/Portfolio";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <>
      <SiteNav />
      <HomeScreen />
      <Portfolio />
      <About />
      <Contact />
    </>
  );
}

export default App;
