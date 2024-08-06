import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/IMG4.png";
import IMG5 from "../../assets/Expence.png";
import IMG6 from "../../assets/Task.png";

const data = [
  {
    id: 1,
    image: IMG5,
    title: "FinanceInsight",
    github: "https://github.com/jatinkumar022/FinanceInsight",
    demo: "https://finance-insight-psi.vercel.app/",
  },
  {
    id: 2,
    image: IMG6,
    title: "Task Manager",
    github: "https://github.com/jatinkumar022/new-task",
    demo: "https://new-task-weld.vercel.app/",
  },
  {
    id: 3,
    image: IMG4,
    title: "My Weather",
    github: "https://github.com",
    demo: "http://rjweather.freewebhostmost.com/",
  },
  {
    id: 4,
    image: IMG1,
    title: "Agriculture Marketing",
    github: "https://github.com",
    demo: "https://agriculture.freewebhostmost.com/",
  },

  {
    id: 5,
    image: IMG3,
    title: "My Portfolio",
    github: "https://github.com",
    demo: "#",
  },
  {
    id: 6,
    image: IMG2,
    title: "Restoran",
    github: "https://github.com",
    demo: "https://dribble.com",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} target="_blank" className="btn">
                  Github
                </a>
                <a href={demo} target="_blank" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
