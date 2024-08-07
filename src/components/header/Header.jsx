import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Typing from "react-typing-effect";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const headerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Header = () => {
  const headerRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const headerElement = headerRef.current;
      const { top } = headerElement.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (top < viewportHeight && top >= 0) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <header className="home" ref={headerRef}>
      <div className="container header__container">
        <motion.h5
          initial="hidden"
          animate={controls}
          variants={headerVariants}
        >
          Hello I&apos;m
        </motion.h5>
        <motion.h1
          initial="hidden"
          animate={controls}
          variants={headerVariants}
        >
          <Typing
            text={["Jatin Ramani"]}
            cursorRenderer={(cursor) => <h1>{cursor}</h1>}
            speed={100}
            eraseSpeed={50}
            eraseDelay={1500}
            typingDelay={500}
          />
        </motion.h1>
        <motion.h5
          className="text-light"
          initial="hidden"
          animate={controls}
          variants={headerVariants}
        >
          Frontend Developer
        </motion.h5>
        <CTA />
        <div className="header__bottom">
          <div className="header__socials">
            <HeaderSocials />
          </div>
          <div className="centered">
            <div className="me">
              <img src={ME} className="meimg" alt="me" />
            </div>
          </div>
          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
