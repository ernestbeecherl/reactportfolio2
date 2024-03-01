import React from "react";
import myResume from "../assets/ETBResume.pdf";
import { BsCloudDownloadFill } from "react-icons/bs";

/**
 * Component for displaying resume and skills learned in a full-stack coding bootcamp.
 * It includes a download link for the resume and sections for frontend, backend, and performance technologies.
 */
export default function Resume() {
  return (
    <div>
      {/* Section for Resume & Skills */}
      <section>
        <div className="d-flex justify-content-center mb-5">
          {/* Heading with download link for the resume */}
          <h1>Resume & Skills
            <a className="ms-4" href={myResume} download data-bs-toggle="tooltip" data-bs-placement="top" title="Download my resume">
              <BsCloudDownloadFill size={30} />
            </a>
          </h1>
        </div>
      </section>
      {/* Container for skills sections */}
      <div className="container d-flex justify-content-center align-items-center flex-column">
        {/* Heading for skills */}
        <h2 className="mb-5">Skills I learned in full-stack coding bootcamp:</h2>
        {/* Row for skill sections */}
        <section className="row gx-4 justify-content-center">
          {/* Frontend technologies section */}
          <div className="col">
            <div className="d-flex flex-column">
              <h3>Font-End Tech</h3>
              {/* List of frontend technologies */}
              <ul className="fs-4">
                <li>HTML5</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>APIs</li>
                <li>Bootstrap</li>
                <li>GIT</li>
              </ul>
            </div>
          </div>
          {/* Backend technologies section */}
          <div className="col">
            <div className="d-flex flex-column">
              <h3>Back-End Tech</h3>
              {/* List of backend technologies */}
              <ul className="fs-4">
                <li>Node.Js</li>
                <li>Jest</li>
                <li>Express.js</li>
                <li>MySQL</li>
                <li>Sequelize</li>
                <li>Object-Relational Mapping(ORM)</li>
                <li>Model View Controller(MVC)</li>
              </ul>
            </div>
          </div>
          {/* Performance technologies section */}
          <div className="col">
            <div className="d-flex flex-column">
              <h3>Performance Tech</h3>
              {/* List of performance technologies */}
              <ul className="fs-4">
                <li>NoSQL</li>
                <li>Progressive Web Applications (PWA)</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>GraphQL</li>
                <li>React</li>
                <li>MERN</li>
                <li>State</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}