import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Abhijith Sai",
    "Full Stack Developer",
    "AWS Certified Developer Associate",
    "Java Developer",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(150); // Typing speed
  const period = 1000; // Time before deleting starts

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(100); // Deleting speed is slightly faster than typing but still natural
    } else {
      setDelta(150); // Typing speed
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period); // Pause before deleting starts
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(150); // Reset typing speed after deleting
    }
  };

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
              {/* {`Hi I'm Abhijith Sai `}
              <br></br> */}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              Let’s create something amazing together! Feel free to explore my
              skills, experience and projects. If you’d like to connect or
              collaborate, don’t hesitate to reach out—I'm always open to new
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
