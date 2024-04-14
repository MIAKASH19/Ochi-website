import React from "react";
import Navbar from "./components/Navbar"
import Landing from "./components/Landing";
import Marque from "./components/Marque";
import About from "./components/About";
import EyePlay from "./components/EyePlay";
import Featured from "./components/Featured";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="w-full min-h-screen bg-zinc-900 ">
      <Navbar />
      <Landing />
      <Marque />
      <About />
      <EyePlay />
      <Featured />
      <Cards />
    </div>
  );
}

export default App;