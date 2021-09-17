import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/Cv-Gabriel-Delgadillo-en.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {


  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        If you don't mind😄...
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Full Stack Project [Henry]"
              date="September 2021 - Today"
              content={[
                "Worked on the development of an website for getting consultations in a hospital",
                " Translated designs and wireframes into a responsive user interface and reusable components using React.js.",
                "Used Back-End APIs to display data using the Custom Components, library Components, and Redux.",
                "Used JIRA on an everyday basis for the design and development.",
                "Constant use of agile methodologies such as scrum",
              ]}
            />
            <Resumecontent
              title="Personal Full Stack Project"
              date="September 2021 - Today"
              content={[
                "Design and implement a website where the user can view, search and make their own dog breeds",
                "Manage the backend with nodeJs and express",
                "Manage the frontend with react, redux and css(without libreries)",
              ]}
            />
            <Resumecontent
              title="Teaching assistant [Henry]"
              date="August 2021 - Today"
              content={[
                "Coordination an student assistence during their journey on the bootcamp (16 students)",
                "Planification and development of activities, resolution of doubts",
                "Schedule:JavaScript, React, Node, Express, PostgreSQL, Sequelize, among others",
              ]}
            />
            
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Bachelor's degree in computing [Unlp Informatica, La Plata] "
              date="2016 - Present"
              content={[
                "Object oriented programming",
                "Fundamentals in data structures and algorithms",
                "Mathematics oriented to logic and probabilities",
              ]}
            />
            <Resumecontent
              title="Full Stack Developer [Henry] "
              date="2021 - Present"
              content={[
                "Over 700 hours of theoretical/practical course",
                "Training in tecnologies front-end and backend",
              ]}
            />
            <Resumecontent
              title="Technician [Ace institute] "
              date="2020"
              content={[
                "Formation in assembly and repair of pc and networks",
              ]}
            />
            <Resumecontent
              title="German (basic)[University language center]"
              date="August 2019 - May 2020"
              content={[
                "Basic formation of the german lenguage with phonetic and vocabulary practices",
              ]}
            />

            

            
          </Col>
        </Row>
        If you are interested🙂...
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
