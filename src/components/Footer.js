import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/linkedin.png"; // LinkedIn icon
import navIcon2 from "../assets/img/github.png"; // GitHub icon
import navIcon3 from "../assets/img/gmail.png";
import colorSharp2 from "../assets/img/color-sharp2.png"; // Importing the same background image as experience

export const Footer = () => {
  const footerStyle = {
    backgroundImage: `url(${colorSharp2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "30px 0",
    color: "#fff",
    textAlign: "center",
    position: "relative", // Ensure the footer is positioned relative
    bottom: "0", // Make sure it's aligned at the bottom
    width: "100%", // Ensure it stretches across the entire viewport width
  };

  return (
    <footer className="footer" id="footer" style={footerStyle}>
      <Container>
        <Row>
          <Col className="text-center">
            {/* Contact Information */}
            <p className="contact-info">
              <strong>Contact Information:</strong> <br />
              <a href="mailto:abhijithsaiadmits@gmail.com">
                abhijithadmits@gmail.com
              </a>{" "}
              <br />
              <a href="tel:+19714257625">+1 971-425-7625</a> <br />
              Cincinnati, Ohio
            </p>

            {/* Social Icons */}
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/abhijithsai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a
                href="https://github.com/abhijithsai1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon2} alt="GitHub" />
              </a>
              <a href="mailto:abhijithsaiadmits@gmail.com" target="_blank">
                <img src={navIcon3} alt="Gmail" />
              </a>
            </div>

            {/* Copyright Information */}
            <p className="footer-copyright">
              Copyright © 2024 Abhijith Sai. All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
