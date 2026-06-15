import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

const toRotate = [
  "Abhijith Sai",
  "Full Stack Developer",
  "AWS Certified Developer Associate",
  "Java Developer",
];
const PERIOD = 1000;

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(150);

  const tickRef = useRef(null);

  // Always point to latest closure so the interval never goes stale
  tickRef.current = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(PERIOD);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum((prev) => prev + 1);
      setDelta(150);
    } else {
      setDelta(isDeleting ? 100 : 150);
    }
  };

  useEffect(() => {
    const ticker = setInterval(() => {
      tickRef.current();
    }, delta);
    return () => clearInterval(ticker);
  }, [delta]);

  return (
    <section className="banner" id="about">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">
              Hello <span className="wave"> 👋🏻, </span> Thank you for visiting
              my portfolio. I'm
            </span>
            <h1>
              <span className="wrap">{text}</span>
            </h1>
            <p>
              Let's create something amazing together! Feel free to explore my
              skills, experience and projects. If you'd like to connect or
              collaborate, don't hesitate to reach out—I'm always open to new
              ideas and opportunities.
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Let's Connect <ArrowRightCircle size={25} />
            </button>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
