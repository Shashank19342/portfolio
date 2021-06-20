import React, {useState} from "react";
import "./Navbar.css";
import myImage from "../Images/my-image.jpg";


function Navbar() {

  const [clicked, setclicked] = useState(false);  
  const [hamclick, sethamclick] = useState(false);

  const profile = ()=>{
    setclicked(!clicked);
  }; 

  const ham = ()=>{
    sethamclick(!hamclick);
  };

  const scrolltohome = ()=>{
    sethamclick(!hamclick);
    document.querySelector('.swipe-back').scrollIntoView();
  }
  const scrolltoabout = ()=>{
    sethamclick(!hamclick);
    document.querySelector('.aboutme').scrollIntoView();
  }
  const scrolltocertif = ()=>{
    sethamclick(!hamclick);
    document.querySelector('.all-skills').scrollIntoView();
  }
  const scrolltoproj = ()=>{
    sethamclick(!hamclick);
    document.querySelector('.all-projects').scrollIntoView();
  }
  const scrolltocontact = ()=>{
    sethamclick(!hamclick);
    document.querySelector('.contact').scrollIntoView();
  }

    return (
      <div className="nav">
        <div className="logo" onClick={profile}>
          <div className="logo-image"></div>
          <h3 className={!clicked ? 'logo h3' : 'logo h3 bright'}>Shashank Singh</h3>
        </div>
        <div className={!clicked ? 'image' : 'image info'}>
          <img src={myImage} className="profile-pic"></img>
          <h3>Shashank Singh</h3>
          <p>Age: 18 Yrs.</p>
          <p>Student At: Army Institute of Technology, Pune</p>
          <p>Bio: Third Year IT Student</p>
          <a href="https://www.linkedin.com/in/shashank-singh-1a63a11b0/" target="_blank">LinkedIn Profile</a>
        </div>
        <div className="hambar"><i className={hamclick?"fas fa-times":"fas fa-bars"} onClick={ham}></i></div>
        <div className={hamclick?"nav-items":"nav-items pre"}>
            <ul>
                <li onClick={scrolltohome}>Home</li>
                <li onClick={scrolltoabout}>About</li>
                <li onClick={scrolltocertif}>Certificates</li>
                <li onClick={scrolltoproj}>Projects</li>
                <li onClick={scrolltocontact}>Contact Me</li>
            </ul>
        </div>
      </div>
    );
}

export default Navbar;