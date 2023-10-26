import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import luceorloginpage from "../../Assets/Projects/luceorloginpage.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import havenfort from "../../Assets/Projects/havenfortloginpage.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Kaddem DevOps Project"
              description="I'm deeply engaged in the Kaddem DevOps Project as part of my college curriculum at Esprit, gaining hands-on experience in DevOps. We're building a pipeline with Git, Jenkins, Docker, and testing. I've contributed to team formation, Git setup, Jenkins pipeline development, and now I'm focusing on containerization and integration testing. This enriching experience enhances my automation and CI skills. Stay tuned for updates!"
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={luceorloginpage}
              isBlog={false}
              title="Luceor-Multi-Tenancy-system"
              description="Welcome to the Luceor Multi-Tenancy System repository. 🚀 This is a versatile B2B application built with Spring and Angular, designed to simplify service management, client data handling, equipment tracking, and ensure secure user access. 🔐
              Note: This project was developed as part of an internship at Luceor, a leading company in the field."
              ghLink="https://github.com/AmineSaassougui/Luceor-Multi-Tenancy-system"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={havenfort}
              isBlog={false}
              title="Havenfort"
              description="Havenfort Dev - Spring & Angular Tool Management
              Experience the outdoors with Havenfort's Tool Management Module, powered by Spring and Angular. Seamlessly manage camping equipment, categorize tools, and find what you need quickly.
              
              Explore your next adventure with Havenfort!
              
              See the project in my portfolio."
              ghLink="https://github.com/AmineSaassougui/havenfort_dev"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
