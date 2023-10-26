import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiSpring,
  SiAngular,
  SiJavascript,
  SiBootstrap,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

import './ResumeNew.css'; // Import your CSS file with animation styles

function Techstack() {
  const [animationActive, setAnimationActive] = useState(false);

  useEffect(() => {
    // Add scroll event listener to trigger the animation when the Techstack section is in view
    const handleScroll = () => {
      const element = document.querySelector(".tech-icons");
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
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col
        xs={4}
        md={2}
        className={`tech-icons ${animationActive ? "active" : ""}`}
      >
        <SiSpring />
      </Col>
      <Col
        xs={4}
        md={2}
        className={`tech-icons ${animationActive ? "active" : ""}`}
      >
        <SiAngular />
      </Col>
      <Col
        xs={4}
        md={2}
        className={`tech-icons ${animationActive ? "active" : ""}`}
      >
        <SiBootstrap />
      </Col>
      <Col
        xs={4}
        md={2}
        className={`tech-icons ${animationActive ? "active" : ""}`}
      >
        <CgCPlusPlus />
      </Col>
      <Col
        xs={4}
        md={2}
        className={`tech-icons ${animationActive ? "active" : ""}`}
      >
        <DiJavascript1 />
      </Col>
      <Col
        xs={4}
        md={2}
        className={`tech-icons ${animationActive ? "active" : ""}`}
      >
        <SiJavascript />
      </Col>
      
      <Col
        xs={4}
        md={2}
        className={`tech-icons ${animationActive ? "active" : ""}`}
      >
        <DiNodejs />
      </Col>
      <Col
        xs={4}
        md={2}
        className={`tech-icons ${animationActive ? "active" : ""}`}
      >
        <DiReact />
      </Col>
      <Col
        xs={4}
        md={2}
        className={`tech-icons ${animationActive ? "active" : ""}`}
      >
        <SiSolidity />
      </Col>
      <Col
        xs={4}
        md={2}
        className={`tech-icons ${animationActive ? "active" : ""}`}
      >
        <DiMongodb />
      </Col>
      <Col
        xs={4}
        md={2}
        className={`tech-icons ${animationActive ? "active" : ""}`}
      >
        <SiNextdotjs />
      </Col>
      <Col
        xs={4}
        md={2}
        className={`tech-icons ${animationActive ? "active" : ""}`}
      >
        <DiGit />
      </Col>
      <Col
        xs={4}
        md={2}
        className={`tech-icons ${animationActive ? "active" : ""}`}
      >
        <SiFirebase />
      </Col>
      <Col
        xs={4}
        md={2}
        className={`tech-icons ${animationActive ? "active" : ""}`}
      >
        <SiRedis />
      </Col>
      <Col
        xs={4}
        md={2}
        className={`tech-icons ${animationActive ? "active" : ""}`}
      >
        <SiPostgresql />
      </Col>
      <Col
        xs={4}
        md={2}
        className={`tech-icons ${animationActive ? "active" : ""}`}
      >
        <DiPython />
      </Col>
      <Col
        xs={4}
        md={2}
        className={`tech-icons ${animationActive ? "active" : ""}`}
      >
        <DiJava />
      </Col>
    </Row>
  );
}

export default Techstack;
