import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { FaIdCard } from "react-icons/fa";

// Variants for animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const About = () => {
  // Intersection observers
  const { ref, inView } = useInView({
    triggerOnce: false, // Set to false to animate each time it comes into view
    threshold: 0.1,
  });

  return (
    <section id="about" ref={ref}>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <motion.div
          className="about__me"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </motion.div>
        <motion.div
          className="about__content"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="about__cards">
            <motion.article
              className="about__card"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
            >
              <FaAward className="about__icon" />
              <h5>Certificate</h5>
              <small>Java - Alpha batch</small>
            </motion.article>
            <motion.article
              className="about__card"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
            >
              <IoSchoolSharp className="about__icon" />
              <h5>Education</h5>
              <small>Saurashtra University</small>
              <br />
              <small>Jain University - Bangluru</small>
            </motion.article>
            <motion.article
              className="about__card"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
            >
              <FaIdCard className="about__icon" />
              <h5>Internship</h5>
              <small>Dvij Infotech</small>
              <br />
              <small>2024</small>
            </motion.article>
          </div>
          <motion.p
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            My name is Jatin Ramani, and I hold a degree from Saurashtra
            University. I am interning at Dvij Infotech while pursuing my
            master's at Jain University. Based in Ahmedabad, I am passionate
            about web development and currently enhancing my skills in React JS.
            My dedication to education and technology drives my career.
          </motion.p>
          <motion.a
            href="#contact"
            className="btn btn-primary"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            Let's Talk
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
