import React from "react";
import { BiCheck } from "react-icons/bi";
import "./services.css";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Programming Languages</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Java: Proficient in developing robust and scalable applications
                using Java, with a strong understanding of object-oriented
                programming principles and design patterns.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                JavaScript: Experienced in creating dynamic and interactive web
                applications using JavaScript, including familiarity with ES6+
                features and modern frameworks such as React and Node.js.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                C: Solid foundation in C programming, with expertise in
                system-level programming, memory management, and efficient
                algorithm implementation.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Python (Basic): Basic knowledge of Python, including syntax,
                data structures, and simple scripting for automation and data
                analysis tasks.
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                React JS Development: Proficient in building dynamic and
                responsive web applications using React JS.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                PHP Development: Experienced in creating robust and scalable
                back-end solutions with PHP.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Component-Based Architecture: Skilled in designing reusable and
                efficient components in React JS.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                State Management: Knowledgeable in state management techniques
                using Redux or Context API in React JS.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Front-End Development: Expertise in HTML, CSS, and JavaScript to
                create visually appealing and user-friendly interfaces.
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                MySQL: Basic understanding of MySQL, including creating and
                managing databases, writing simple queries, and performing CRUD
                operations.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                SQL Server: Familiar with SQL Server, with skills in basic
                database creation, querying, and data manipulation using T-SQL.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                MongoDB: Basic knowledge of MongoDB, including working with
                collections and documents, performing CRUD operations, and
                understanding its NoSQL data model.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Database Design: Familiar with basic principles of database
                design, including normalization, indexing, and relationships
                between tables or collections.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Query Optimization: Basic understanding of query optimization
                techniques to improve database performance and efficiency.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
