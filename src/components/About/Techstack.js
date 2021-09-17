import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPostgresql,
  DiCodepen,
} from "react-icons/di";
import { SiRedux } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      

      <Col xs={4} md={2} className="tech-icons">
        <DiPostgresql />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiCodepen />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
      </Col>
      
      
      
    </Row>
  );
}

export default Techstack;
