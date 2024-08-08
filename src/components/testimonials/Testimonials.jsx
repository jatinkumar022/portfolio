import React from "react";
import "./testimonials.css";
import Jain from "../../assets/jain.png";
import Sau from "../../assets/saurashtra.png";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

const data = [
  {
    avatar: Sau,
    name: "Saurashtra University",
    review: `
    Bca, Computer ScienceBca, Computer Science
    Jul 2021 - Mar 2024Jul 2021 - Mar 2024
    Grade: CGPA: 8.68`,
  },
  {
    avatar: Jain,
    name: "Jain University ",
    review: `
    Master of Computer Applications - MCA,  
    Computer Science & IT
    2024-2026`,
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>My</h5>
      <h2>Education</h2>

      <Swiper
        className="container testimonials__container" // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} className="image_uni" alt="avatar 1" />
              </div>
              <h5 className="client__name">{name}</h5>
              <pre className="client__review">{review}</pre>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
