import React from "react";
import Navbar from "./components/Navbar"
import Landing from "./components/Landing";
import Marque from "./components/Marque";
import About from "./components/About";
import EyePlay from "./components/EyePlay";
import EyePlay2 from "./components/EyePlay2";
import Featured from "./components/Featured";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from 'locomotive-scroll';

function App() {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen bg-zinc-900 ">
      <Navbar />
      <Landing />
      <Marque />
      <About />
      <EyePlay />
      <Featured />
      <Cards />
      <EyePlay2 />
      <Footer />
    </div>
  );
}

export default App;