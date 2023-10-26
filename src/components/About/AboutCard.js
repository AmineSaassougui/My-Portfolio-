import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

import './ResumeNew.css'; // Import your CSS file with animation styles

function AboutCard() {
  const [animationActive, setAnimationActive] = useState(false);

  useEffect(() => {
    // Add scroll event listener to trigger the animation when the AboutCard section is in view
    const handleScroll = () => {
      const element = document.querySelector(".quote-card-view");
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.75) {
        setAnimationActive(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Card className={`quote-card-view ${animationActive ? "active" : ""}`}>
      <Card.Body>
        <div className="text-center">
          <blockquote className="blockquote">
            <p style={{ textAlign: "justify" }}>
              Hi Everyone, I am <span className="purple">Med Amine Saassougui</span>, a passionate software engineer and full-stack web developer hailing from Tunisia.
              <br /> Currently, I'm pursuing my studies at <a href="https://www.esprit.tn/en">ESPRIT Higher School of Engineering</a> and working on the RH platform for ArabSoft.
              <br /> My expertise includes technologies like Node.js, React.js, Angular, and Spring.
              <br /> I'm actively looking to collaborate on open-source projects and freelance opportunities.
            </p>
            <ul>
              <li className="about-activity">
                <ImPointRight /> Developing innovative web solutions
              </li>
              <li className="about-activity">
                <ImPointRight /> Writing tech articles
              </li>
              <li className="about-activity">
                <ImPointRight /> Exploring new coding challenges
              </li>
            </ul>

            <p style={{ color: "rgb(155 126 172)" }}>
              "Strive to build things that make a difference!"
              <br />
              <span className="purple">Fun fact:</span> I code with a soundtrack! My favorite tunes and playlists are the perfect companions for programming sessions, adding rhythm and inspiration to my coding adventures. 🎵👨‍💻
            </p>
            <footer className="blockquote-footer">Med Amine Saassougui</footer>
          </blockquote>
        </div>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
