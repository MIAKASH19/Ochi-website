import React from "react";
import Navbar from "./components/Navbar"
import Landing from "./components/Landing";
import Marque from "./components/Marque";
import About from "./components/About";
import EyePlay from "./components/EyePlay";

function App() {
  return (
    <div className="w-full min-h-screen bg-zinc-900 ">
      <Navbar />
      <Landing />
      <Marque />
      <About />
      <EyePlay />
    </div>
  );
}

export default App;