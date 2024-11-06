import React from "react";
import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCards";
import colorSharp2 from "../assets/img/color-sharp2.png"; // Background image
import project1 from "../assets/img/project1.jpeg";
import project2 from "../assets/img/project2.jpeg";
import project3 from "../assets/img/project3.jpg";

export const Projects = () => {
  const projects = [
    {
      title: "Restaurant Finder Application",
      description: `
        • Developed a responsive web application using React to search for and display restaurant details and menus.
        \n• Implemented dynamic components, state management, and custom hooks for efficient data fetching.
        \n• Integrated with REST APIs to retrieve restaurant data, using MongoDB for storage.
      `,
      imgUrl: project2,
      targetTab: "first", // Linking to Project 1 details
    },
    {
      title: "Student Management System",
      description: `
        • Developed a Student Management System with React as the frontend, delivering a seamless user interface.
        \n• Integrated with Spring Boot backend through REST APIs.
        \n• Utilized React components, state management, and dynamic rendering for real-time updates.
      `,
      imgUrl: project1,
      targetTab: "second", // Linking to Project 2 details
    },
    {
      title: "Retail Banking System",
      description: `
        • Designed and developed a feature-rich banking website using Java, Spring Boot.
        \n• Implemented core features like fund transfers, deposits, withdrawals, and balance inquiries.
        \n• Integrated a chatbot onto the AWS platform to enhance customer service.
      `,
      imgUrl: project3,
      targetTab: "third", // Linking to Project 3 details
    },
  ];

  // Background styling
  const containerStyle = {
    backgroundImage: `url(${colorSharp2})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    padding: "50px 0",
  };

  return (
    <section className="project" id="projects" style={containerStyle}>
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Here are a few projects I have worked on:</p>
            <Tab.Container id="project-tabs" defaultActiveKey="first">
              {/* Project Navigation: Restaurant Finder, Student Management, Retail Banking */}
              <Row className="mb-4">
                <Nav
                  variant="pills"
                  className="nav-pills justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Restaurant Finder</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">
                      Student Management System
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Retail Banking</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Row>

              {/* Tab Content: Display Project Details */}
              <Tab.Content>
                {/* Restaurant Finder details */}
                <Tab.Pane eventKey="first">
                  <h3 className="text-center">{projects[0].title}</h3>
                  <img
                    src={projects[0].imgUrl}
                    alt={projects[0].title}
                    className="project-details-image"
                  />
                  <p className="project-description">
                    {projects[0].description}
                  </p>
                </Tab.Pane>

                {/* Student Management System details */}
                <Tab.Pane eventKey="second">
                  <h3 className="text-center">{projects[1].title}</h3>
                  <img
                    src={projects[1].imgUrl}
                    alt={projects[1].title}
                    className="project-details-image"
                  />
                  <p className="project-description">
                    {projects[1].description}
                  </p>
                </Tab.Pane>

                {/* Retail Banking System details */}
                <Tab.Pane eventKey="third">
                  <h3 className="text-center">{projects[2].title}</h3>
                  <img
                    src={projects[2].imgUrl}
                    alt={projects[2].title}
                    className="project-details-image"
                  />
                  <p className="project-description">
                    {projects[2].description}
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background"
      />
    </section>
  );
};
