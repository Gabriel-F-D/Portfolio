import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import doggo from "../../Assets/Projects/doggo.png";
import MdPrev from "../../Assets/Projects/MdPrev.png";
import weather from "../../Assets/Projects/weather.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={doggo}
              isBlog={false}
              title="Doggo App"
              description="Personal Full-Stack project, in the Backend's side it's using postgreSQL, NodeJs, Sequelize and express. For the FrontEnd it's using React, Redux, some custom hooks, and css without external libreries."
              link="https://github.com/Gabriel-F-D/Proyecto-Henry"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather app"
              description="Website build with React and tailwind, it makes an api request of the current weather each time the user types a city in the input."
              link="https://github.com/Gabriel-F-D/weather-app"
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MdPrev}
              isBlog={false}
              title="Markdown Previewer"
              description="A little project for freeCodeCamp that takes the input of the user in the editor and is going to display a preview of the html as result."
              link="https://codepen.io/gaboFCC/pen/gOLPjVP"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
