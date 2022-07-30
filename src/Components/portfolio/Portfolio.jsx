import React from "react";
import "./portfolio.css";
import data from "../portfolio/api";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container-fluid portfolio_container col-lg-12">
        {data.map((res) => {
          return (
            <div class="card portfolio_items ">
              <img src={res.img} class="card-img-top portfolio_items_img" alt="img" />
              <div class="card-body">
                <h5 class="card-title text-center">{res.title}</h5>
                <div className="portfolio_items_btn">
                  <a
                    href={res.github}
                    className="btn btn-dark"
                    target="_blank"
                  >
                    Github
                  </a>
                  <a
                    href={res.demo}
                    className="btn btn-dark"
                    target="_blank"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
