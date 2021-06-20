import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import ThoughtSwiper from "./components/ThoughtSwiper";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contactme from "./components/Contactme";

function App() {

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.querySelector('.scroll-top').style.display = "block";
    } else {
      document.querySelector('.scroll-top').style.display = "none";
    }
  }

  const scrolltop = ()=>{
    window.scrollTo(0,0);
  }

    return (
      <div className="App">
        <div className="scroll-top" onClick={scrolltop}><i class="fas fa-arrow-up"></i></div>
        <Navbar />
        <ThoughtSwiper />
        <AboutMe/>
        <Skills/>
        <Projects/>
        <Contactme/>
      </div>
    );
}

export default App;
