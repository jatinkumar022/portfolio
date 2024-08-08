import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { BsPatchCheckFill } from "react-icons/bs";
import "./experience.css";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.2 } },
};

const containerVariantsRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.2 },
  },
};

const cardVariantsItem = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const Experience = () => {
  const frontendRef = useRef(null);
  const backendRef = useRef(null);
  const frontendControls = useAnimation();
  const backendControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const frontendElement = frontendRef.current;
      const backendElement = backendRef.current;

      if (frontendElement && backendElement) {
        const { top } = frontendElement.getBoundingClientRect();
        const { top: backendTop } = backendElement.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        if (top < viewportHeight && top >= 0) {
          frontendControls.start("visible");
        } else {
          frontendControls.start("hidden");
        }

        if (backendTop < viewportHeight && backendTop >= 0) {
          backendControls.start("visible");
        } else {
          backendControls.start("hidden");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [frontendControls, backendControls]);

  return (
    <section id="experience">
      <h5>What Skill I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <motion.div
          className="experience__frontend"
          initial="hidden"
          animate={frontendControls}
          variants={containerVariants}
          ref={frontendRef}
        >
          <h3>Frontend Development</h3>
          <motion.div className="experience__content" variants={cardVariants}>
            <motion.article
              className="experience__details"
              variants={cardVariantsItem}
            >
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </motion.article>
            <motion.article
              className="experience__details"
              variants={cardVariantsItem}
            >
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </motion.article>
            <motion.article
              className="experience__details"
              variants={cardVariantsItem}
            >
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </motion.article>
            <motion.article
              className="experience__details"
              variants={cardVariantsItem}
            >
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </motion.article>
            <motion.article
              className="experience__details"
              variants={cardVariantsItem}
            >
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Typescript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </motion.article>
            <motion.article
              className="experience__details"
              variants={cardVariantsItem}
            >
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Experienced</small>
              </div>
            </motion.article>
          </motion.div>
        </motion.div>

        <motion.div
          className="experience__backend"
          initial="hidden"
          animate={backendControls}
          variants={containerVariantsRight}
          ref={backendRef}
        >
          <h3>Backend Development</h3>
          <motion.div className="experience__content" variants={cardVariants}>
            <motion.article
              className="experience__details"
              variants={cardVariantsItem}
            >
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Basic</small>
              </div>
            </motion.article>
            <motion.article
              className="experience__details"
              variants={cardVariantsItem}
            >
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Basic</small>
              </div>
            </motion.article>
            <motion.article
              className="experience__details"
              variants={cardVariantsItem}
            >
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Experienced</small>
              </div>
            </motion.article>
            <motion.article
              className="experience__details"
              variants={cardVariantsItem}
            >
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Basic</small>
              </div>
            </motion.article>
            <motion.article
              className="experience__details"
              variants={cardVariantsItem}
            >
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Java</h4>
                <small className="text-light">Basic</small>
              </div>
            </motion.article>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
