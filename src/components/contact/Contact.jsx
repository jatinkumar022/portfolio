import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
import { MdOutlineEmail } from "react-icons/md";
import { LiaLinkedin } from "react-icons/lia";
import { BsWhatsapp } from "react-icons/bs";
import "./contact.css";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ulw702o", "template_xnf38bs", form.current, {
        publicKey: "O1uFrfONxc5qIeKzU",
      })
      .then(
        () => {
          let name = document.getElementById("name").value;
          swal(`Hey! ${name}`, "Your Message Send Successfuly!", "success");
          e.target.reset();
        },
        (error) => {
          swal("Oops!", "Something went wrong!", error.text);
        }
      );
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>jatirmn@gmail.com</h5>
            <a href="mailto:jatinrmn@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <LiaLinkedin className="contact__option-icon" />
            <h4>Linkedin</h4>
            <h5>Jatin Ramani</h5>
            <a
              href="https://www.linkedin.com/in/jatin-ramani-115436258/"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+91 7861035002</h5>
            <a
              href="https://api.whatsapp.com/send?phone=7861035002"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
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
        </form>
      </div>
    </section>
  );
};

export default Contact;
