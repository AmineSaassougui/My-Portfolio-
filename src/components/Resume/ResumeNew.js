import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/amine_cv_file.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import './ResumeNew.css'; // Import your CSS file

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);

    // Add scroll event listener to trigger animations
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Define a function to handle scroll animations
  const handleScroll = () => {
    const elements = document.querySelectorAll(".resume-item");
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.75) {
        element.classList.add("active");
      }
    });
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Container className="resume">
          <Row>
            <Col md={{ span: 6, offset: 3 }} className="text-center">
              {/* Experience Section */}
              <div className="text-center">
                <h3 className="resume-title">Experience</h3>
              </div>

              <div className="resume-item active">
                <h4>Software Engineering Student</h4>
                <a href="https://www.esprit.tn/en" className="mb-2">ESPRIT Higher School of Engineering</a>
                <p>Expected Graduation: 2023/2024</p>
              </div>

              {/* Add other experience items with the animation class */}
              <div className="resume-item">
                <h4>Internship - Arabsoft</h4>
                <p>Software Developer</p>
                <p>2022/2023</p>
                <p>Developed an HR platform using Spring and Angular.</p>
              </div>

              <div className="resume-item">
                <h4>Internship - Luceor</h4>
                <p>Software Developer</p>
                <p>2023/2024</p>
                <p>Contributed to projects at Luceor company.</p>
              </div>

              <div className="resume-item">
                <h4>Freelance Work</h4>
                <p>Web Development and Systems Management</p>
                <p>Performed freelance work on website development and system management in local areas.</p>
              </div>

              <div className="resume-item">
                <h4>Preparatory Institute for Engineering Studies</h4>
                <p>Bizerte, Tunisia</p>
                <p>2019 - 2021</p>
                <p>Completed a two-year preparatory program in engineering studies.</p>
              </div>

              <div className="resume-item">
                <h4>Baccalauréat Diploma</h4>
                <p>High Marks</p>
                <p>2019</p>
                <p>Successfully obtained the Baccalauréat diploma with excellent marks.</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="text-center">
              {/* PDF Viewer Section */}
              <Document file={pdf} className="d-flex justify-content-center">
                <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
              </Document>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default ResumeNew;
