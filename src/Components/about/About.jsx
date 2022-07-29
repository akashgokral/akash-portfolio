import React from "react";
import "./about.css";
import me from "../../Assets/me.png";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about" >
      <h5 >Get to Know</h5>
      <h2>About me</h2>

      <div className="container-fluid about_container">
        <div className="about_me">
          <div className="about_me_img">
            <img src={me} alt="me" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1yr</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects </h5>
              <small>5+ </small>
            </article>
            </div>
          <p className="my-lg-5 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            dicta qui sapiente inventore cupiditate eligendi excepturi, et
            quisquam temporibus aut ea corporis animi nemo mollitia architecto
          </p>
          <a href="#contact"><button className="btn btn-primary">Let's Talk</button></a>
      </div>
      </div>
    </section>
  );
};

export default About;
