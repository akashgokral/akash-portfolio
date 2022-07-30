import React from "react";
import "./portfolio.css";
import data from "../portfolio/api";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container-fluid portfolio_container">
      {data.map((res) => {
        return (
          <div className="col-lg-5">
            <article className="portfolio_items">
              <div className="portfolio_items_img">
                <img src={res.img} alt="img" />
              </div>
              <h3>{res.title}</h3>
              <div className="portfolio_items_btn">
                <a
                  href={res.github}
                  className="btn btn-secondary"
                  target="_blank"
                >
                  Github
                </a>
                <a
                  href={res.demo}
                  className="btn btn-secondary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
            </div>
        );
      })}
          </div>
    </section>
  );
};

export default Portfolio;
