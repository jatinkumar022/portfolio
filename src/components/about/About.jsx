import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { FaIdCard } from "react-icons/fa";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Certificate</h5>
              <small>Java - Alpha batch</small>
            </article>
            <article className="about__card">
              <IoSchoolSharp className="about__icon" />
              <h5>Education</h5>
              <small>Saurashtra University </small>
              <br />
              <small>Jain University - Bangluru</small>
            </article>
            <article className="about__card">
              <FaIdCard className="about__icon" />
              <h5>Internship</h5>
              <small>Dvij Infotech</small>
              <br />
              <small>2024</small>
            </article>
          </div>
          <p>
            My name is Jatin Ramani, and I hold a degree from Saurashtra
            University. I am interning at Dvij Infotech while pursuing my
            master's at Jain University. Based in Ahmedabad, I am passionate
            about web development and currently enhancing my skills in React JS.
            My dedication to education and technology drives my career.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
