import React from "react";
import "./portfolio.css";
import data from "../portfolio/api";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination,Autoplay} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <Swiper className="container-fluid portfolio_container col-lg-6"
            modules={[Pagination,Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ clickable: true }}
            >
        {data.map((res) => {
          return (
            <SwiperSlide className="card portfolio_items ">
              <img src={res.img} className="card-img-top portfolio_items_img" alt="img" />
              <div className="card-body">
                <h5 className="card-title text-center">{res.title}</h5>
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
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Portfolio;
