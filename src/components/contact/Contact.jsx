import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
import { MdOutlineEmail } from "react-icons/md";
import { LiaLinkedin } from "react-icons/lia";
import { BsWhatsapp } from "react-icons/bs";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./contact.css";

const container = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, rotate: -30 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.5 },
  },
};

const formAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, delay: 1 } },
};

const Contact = () => {
  const form = useRef();
  const { ref, inView } = useInView({ threshold: 0.1 });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ulw702o", "template_xnf38bs", form.current, {
        publicKey: "O1uFrfONxc5qIeKzU",
      })
      .then(
        () => {
          let name = document.getElementById("name").value;
          swal(`Hey! ${name}`, "Your Message Send Successfully!", "success");
          e.target.reset();
        },
        (error) => {
          swal("Oops!", "Something went wrong!", error.text);
        }
      );
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={container}
    >
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <motion.div
          className="contact__options"
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.article
            className="contact__option"
            variants={item}
            whileHover={{
              border: "2px solid #3498db",
              rotate: [0, 10, -10, 0],
            }}
            whileTap={{ scale: 0.95 }}
          >
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>jatirmn@gmail.com</h5>
            <a
              href="mailto:jatinrmn@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a Message
            </a>
          </motion.article>
          <motion.article
            className="contact__option"
            variants={item}
            whileHover={{
              border: "2px solid #3498db",
              rotate: [0, 10, -10, 0],
            }}
            whileTap={{ scale: 0.95 }}
          >
            <LiaLinkedin className="contact__option-icon" />
            <h4>Linkedin</h4>
            <h5>Jatin Ramani</h5>
            <a
              href="https://www.linkedin.com/in/jatin-ramani-115436258/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a Message
            </a>
          </motion.article>
          <motion.article
            className="contact__option"
            variants={item}
            whileHover={{
              border: "2px solid #3498db",
              rotate: [0, 10, -10, 0],
            }}
            whileTap={{ scale: 0.95 }}
          >
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+91 7861035002</h5>
            <a
              href="https://api.whatsapp.com/send?phone=7861035002"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a Message
            </a>
          </motion.article>
        </motion.div>
        {/* END OF CONTACT OPTIONS */}

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          variants={formAnimation}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;
