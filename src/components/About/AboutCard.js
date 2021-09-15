import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Gabriel Delgadillo </span>
            from <span className="purple"> Buenos Aires, Argentina.</span>
            <br />I am a junior pursuing a Bachelor's degree in computing at the Unlp College.
            <br />
            <br />
            Beyond coding, some of my hobbies😬!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning to play the vioin
            </li>
            <li className="about-activity">
              <ImPointRight /> Meeting new people and learn new things
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "You don't owe your past self anything.
                That person is gone.
                Make new moves.
            "{" "}
          </p>
          <footer className="blockquote-footer">Quincy Larson</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
