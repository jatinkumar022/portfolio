import React, { useEffect, useState } from "react";

import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import "./nav.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  useEffect(() => {
    window.addEventListener("scroll", function () {
      const observable = {
        home: document.querySelector("header"),
        about: document.querySelector("#about"),
        experience: document.querySelector("#experience"),
        services: document.querySelector("#services"),
        contact: document.querySelector("#contact"),
      };
      const pos = {
        home: observable.home.getBoundingClientRect(),
        about: observable.about.getBoundingClientRect(),
        experience: observable.experience.getBoundingClientRect(),
        services: observable.services.getBoundingClientRect(),
        contact: observable.contact.getBoundingClientRect(),
      };

      if (pos.home.top < window.innerHeight && pos.home.bottom >= 0) {
        setActiveNav("#");
      } else if (pos.about.top < window.innerHeight && pos.about.bottom >= 0) {
        setActiveNav("#about");
      } else if (
        pos.experience.top < window.innerHeight &&
        pos.experience.bottom >= 0
      ) {
        setActiveNav("#experience");
      } else if (
        pos.services.top < window.innerHeight &&
        pos.services.bottom >= 0
      ) {
        setActiveNav("#services");
      } else if (
        pos.contact.top < window.innerHeight &&
        pos.contact.bottom >= 0
      ) {
        setActiveNav("#contact");
      }
    });

    return () => {};
  }, []);

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
