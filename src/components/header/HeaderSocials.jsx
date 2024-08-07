import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const socialIconVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, type: "spring" },
  },
};

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <motion.a
        href="https://linkedin.com"
        target="_blank"
        variants={socialIconVariants}
        initial="hidden"
        animate="visible"
      >
        <FaLinkedin />
      </motion.a>
      <motion.a
        href="https://github.com"
        target="_blank"
        variants={socialIconVariants}
        initial="hidden"
        animate="visible"
      >
        <FaGithub />
      </motion.a>
      <motion.a
        href="https://dribble.com"
        target="_blank"
        variants={socialIconVariants}
        initial="hidden"
        animate="visible"
      >
        <FiDribbble />
      </motion.a>
    </div>
  );
};

export default HeaderSocials;
