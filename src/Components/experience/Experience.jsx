import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container-fluid experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <div className="experience_content_div ">
              <article className="experience_details">
                <BsPatchCheckFill className="experience_details_icon" />
                <div>
                  <h4>HTML</h4>
                  <small>Experienced</small>
                </div>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill className="experience_details_icon" />
                <div>
                  <h4>CSS</h4>
                  <small>Experienced</small>
                </div>
              </article>
            </div>
            <div className="experience_content_div">
              <article className="experience_details">
                <BsPatchCheckFill className="experience_details_icon" />
                <div>
                  <h4>Javascript</h4>
                  <small>Intermediate</small>
                </div>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill className="experience_details_icon" />
                <div>
                  <h4>Bootstrap</h4>
                  <small>Experienced</small>
                </div>
              </article>
            </div>
            <div className="experience_content_div">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>React Js</h4>
                <small>Experienced</small>
              </div>
            </article>
            </div>
          </div>
        </div>
        <div className="experience_backend ">
          <h3>Backend Development</h3>
          <div className="row">
          <div className="experience_content">
          <div className="experience_content_div ">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>Node Js</h4>
                <small>Beginner</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>Mongo DB</h4>
                <small>Beginner</small>
              </div>
            </article>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
