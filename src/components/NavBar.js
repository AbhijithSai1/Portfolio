import { useEffect, useState } from "react";
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import navIcon1 from "../assets/img/linkedin.png"; // LinkedIn icon
import navIcon2 from "../assets/img/github.png"; // GitHub icon
import navIcon3 from "../assets/img/gmail.png"; // Gmail icon

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Handle scrolling and section highlighting
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = document.querySelectorAll("section");
      const scrollPos = window.scrollY + 200; // Adjust for the offset

      sections.forEach((section) => {
        if (
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActiveLink(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar
      bg="transparent"
      expand="lg"
      className={`navbar ${scrolled ? "scrolled" : ""} fixed-top`}
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <span className="navbar-heading">Abhijith Sai</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggle-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mb-2 mb-lg-0">
            {/* <Nav.Link
              href="#about"
              className={
                activeLink === "about" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("about")}
            >
              Summary
            </Nav.Link> */}
            <Nav.Link
              href="#experience"
              className={
                activeLink === "experience"
                  ? "active-navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("experience")}
            >
              Experience
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#education"
              className={
                activeLink === "education"
                  ? "active-navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("education")}
            >
              Education
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={
                activeLink === "contact" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("contact")}
            >
              Contact
            </Nav.Link>

            <Nav.Link
              href="https://drive.google.com/file/d/1JLxd6vvkV4kdThIaxQfhPZ4o3WyH9RKL/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-link"
            >
              Resume
            </Nav.Link>
          </Nav>

          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/abhijithsai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://github.com/abhijithsai1" target="_blank">
                <img src={navIcon2} alt="GitHub" />
              </a>
              <a href="mailto:abhijithsaiadmits@gmail.com">
                <img src={navIcon3} alt="Gmail" />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
