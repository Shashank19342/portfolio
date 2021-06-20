import React, {useState} from "react";
import "./Skills.css";

function Skills() {

    const skill1popup = ()=>{
        document.querySelector('.skill1-popup').style.display = "block";
        document.querySelector('.bg-popup').style.display = "block";
    }
    const skill2popup = ()=>{
        document.querySelector('.skill2-popup').style.display = "block";
        document.querySelector('.bg-popup').style.display = "block";
    }
    const skill3popup = ()=>{
        document.querySelector('.skill3-popup').style.display = "block";
        document.querySelector('.bg-popup').style.display = "block";
    }
    const skill4popup = ()=>{
        document.querySelector('.skill4-popup').style.display = "block";
        document.querySelector('.bg-popup').style.display = "block";
    }
    const skill5popup = ()=>{
        document.querySelector('.skill5-popup').style.display = "block";
        document.querySelector('.bg-popup').style.display = "block";
    }

    const bgshadow = ()=>{
        document.querySelector('.skill1-popup').style.display = "none";
        document.querySelector('.skill2-popup').style.display = "none";
        document.querySelector('.skill3-popup').style.display = "none";
        document.querySelector('.skill4-popup').style.display = "none";
        document.querySelector('.skill5-popup').style.display = "none";
        document.querySelector('.bg-popup').style.display = "none";
    }

    return (
      <div className="all-skills">
        <h2>Certificates</h2>
        <div className="bg-popup" onClick={bgshadow}></div>
        <h4>Python</h4>
        <div className="skill">
            <div className="skill1" onClick={skill1popup}></div>
            <div className="skill1-popup">
                <i className="fas fa-times" onClick={bgshadow}></i>
            </div>

            <div className="skill2" onClick={skill2popup}></div>
            <div className="skill2-popup">
                <i className="fas fa-times" onClick={bgshadow}></i>
            </div>
            
            <div className="skill3" onClick={skill3popup}></div>
            <div className="skill3-popup">
                <i className="fas fa-times" onClick={bgshadow}></i>
            </div>
        </div>
        {/* ===================== break ====================*/}
        <h4>Machine Learning</h4>
        <div className="skill">
            <div className="skill4" onClick={skill4popup}></div>
            <div className="skill4-popup">
                <i className="fas fa-times" onClick={bgshadow}></i>
            </div>

            <div className="skill5" onClick={skill5popup}></div>
            <div className="skill5-popup">
                <i className="fas fa-times" onClick={bgshadow}></i>
            </div>
        </div>
      </div>
    );
}

export default Skills;