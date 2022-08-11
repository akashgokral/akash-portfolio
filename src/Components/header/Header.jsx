import React from "react";
import "./header.css";
import CV from "../../Assets/CV.pdf";
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import me from "../../Assets/me.png"

const Header = () => {
  return (
    <>
    <div className="container-fluid">
      <div className="row">
      <header>
        <div className="container header_container">
          <h5>Hello I'm</h5>
          <h1>Akash Gokral</h1>
          <h5 className="text-light ">Frontend UI Developer</h5>
       
        <div className="cta">
          <a href={CV} download className="btn">
            Download CV
          </a>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
        <div className="w-100 d-flex justify-content-center align-items-center">
        <div className="me">
          <img src={me} alt="me" />
        </div>
        </div>
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
        <div className="header_socials">
          <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
          <a href="https://github.com" target="_blank"><BsGithub/></a>
        </div>
      </header>
      </div>
    </div>
    </>
  );
};

export default Header;
