import React from "react";
import { motion } from "framer-motion";
import CV from "../../assets/cv.pdf";

const buttonVariants = {
  hidden: { opacity: 0, y: -50, x: -50 }, // For the "Download Resume" button
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.3, type: "spring" },
  },
  hover: {
    scale: 1.1,
    transition: { duration: 0.2, type: "spring" },
  },
};

const buttonVariantsRight = {
  hidden: { opacity: 0, y: -50, x: 50 }, // For the "Let's Talk" button
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.3, type: "spring" },
  },
  hover: {
    scale: 1.1,
    transition: { duration: 0.2, type: "spring" },
  },
};

const CTA = () => {
  return (
    <div className="cta">
      <motion.a
        href={CV}
        download
        className="btn"
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        Download Resume
      </motion.a>
      <motion.a
        href="#contact"
        className="btn btn-primary"
        variants={buttonVariantsRight}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        Let's Talk
      </motion.a>
    </div>
  );
};

export default CTA;
