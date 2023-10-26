import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF 🚀
            </h1>
            <p className="home-about-body">
              I'm a <span className="purple">passionate software engineer</span> 🧑‍💻
              and full-stack web developer hailing from Tunisia 🇹🇳, dedicated to
              crafting exceptional digital experiences.
              <br />
              <br />
              I have a strong foundation in classics like{" "}
              <i>
                <b className="purple">C++, JavaScript, Java,  .NET, and Spring Framework.</b>
              </i>
              <br />
              <br />
              My primary areas of interest include building new{" "}
              <i>
                <b className="purple">Web Technologies and Products</b>
              </i>{" "}
              and exploring the realms of{" "}
              <b className="purple">Blockchain.</b>
              <br />
              <br />
              Whenever possible, I love developing products using{" "}
              <b className="purple">Node.js</b> and modern JavaScript libraries and
              frameworks like{" "}
              <i>
                <b className="purple">React.js and Next.js</b>
              </i>. I'm also currently expanding my expertise in{" "}
              <span className="purple">React</span> and <span className="purple">Angular</span>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AmineSaassougui"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/mouhamedamine.saassougui/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mohamed-amine-saassougui-407445293/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mouhamed.amine.saassougui/?hl=fr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;