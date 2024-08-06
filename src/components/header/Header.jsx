import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header className="home">
      <div className="container header__container">
        <h5>Hello I'am</h5>
        <h1>Jatin Ramani</h1>
        <h5 className="text-light">Frontend Developer</h5>
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
