import React from "react";
import "./Projects.css";

function Projects() {

    const project1popup = ()=>{
        document.querySelector('.project1-popup').style.display = "block";
        document.querySelector('.project1-content').style.display = "contents";
        document.querySelector('.bg-popup1').style.display = "block";
    }
    const project2popup = ()=>{
        document.querySelector('.project2-popup').style.display = "block";
        document.querySelector('.project2-content').style.display = "contents";
        document.querySelector('.bg-popup1').style.display = "block";
    }

    const bgshadow = ()=>{
        document.querySelector('.project1-popup').style.display = "none";
        document.querySelector('.project2-popup').style.display = "none";
        document.querySelector('.project2-content').style.display = "none";
        document.querySelector('.project2-content').style.display = "none";
        document.querySelector('.bg-popup1').style.display = "none";
    }


    return (
      <div className="all-projects">
          <h2>Projects</h2>
          <div className="bg-popup1" onClick={bgshadow}></div>
          <h4>Front End Development</h4>
          <div className="projects">
              <div className="project1" onClick={project1popup}>
                <p>Book Store</p>
              </div>
              <div className="project1-popup">
                <i className="fas fa-times" onClick={bgshadow}></i>
                <p className="project1-content">first</p>
              </div>
              
              <div className="project2" onClick={project2popup}>
                <p>Music Jukebox</p>
              </div>
              <div className="project2-popup">
                <i className="fas fa-times" onClick={bgshadow}></i>
                <p className="project2-content">second</p>
              </div>
          </div>
      </div>
    );
}

export default Projects;