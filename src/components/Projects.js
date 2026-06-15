import React from "react";
import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCards";
import colorSharp2 from "../assets/img/color-sharp2.png"; // Background image
import project0 from "../assets/img/project0.png";
import project1 from "../assets/img/project1.jpeg";
import project2 from "../assets/img/project2.jpeg";
import project3 from "../assets/img/project3.jpg";

export const Projects = () => {
  const projects = [
    {
      title: "AI Powered Fitness Recommendation System",
      description: `
        • Built an AI-driven fitness app that analyzes workout sessions and generates personalized health insights using machine learning.
        \n• Implemented real-time analysis of metrics like heart rate, calories burned, and cardiovascular load to deliver actionable recommendations.
        \n• Designed an intuitive dashboard that surfaces improvement suggestions and zone-based training guidance for each session.
      `,
      imgUrl: project0,
      targetTab: "first",
    },
    {
      title: "Restaurant Finder Application",
      description: `
        • Developed a responsive web application using React to search for and display restaurant details and menus.
        \n• Implemented dynamic components, state management, and custom hooks for efficient data fetching.
        \n• Integrated with REST APIs to retrieve restaurant data, using MongoDB for storage.
      `,
      imgUrl: project2,
      targetTab: "second",
    },
    {
      title: "Student Management System",
      description: `
        • Developed a Student Management System with React as the frontend, delivering a seamless user interface.
        \n• Integrated with Spring Boot backend through REST APIs.
        \n• Utilized React components, state management, and dynamic rendering for real-time updates.
      `,
      imgUrl: project1,
      targetTab: "third",
    },
    {
      title: "Retail Banking System",
      description: `
        • Designed and developed a feature-rich banking website using Java, Spring Boot.
        \n• Implemented core features like fund transfers, deposits, withdrawals, and balance inquiries.
        \n• Integrated a chatbot onto the AWS platform to enhance customer service.
      `,
      imgUrl: project3,
      targetTab: "fourth",
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
              {/* Project Navigation */}
              <Row className="mb-4">
                <Nav
                  variant="pills"
                  className="nav-pills justify-content-center align-items-center flex-wrap"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">AI Fitness Recommender</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Restaurant Finder</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">
                      Student Management System
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">Retail Banking</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Row>

              {/* Tab Content: Display Project Details */}
              <Tab.Content>
                {projects.map((project) => (
                  <Tab.Pane
                    key={project.targetTab}
                    eventKey={project.targetTab}
                  >
                    <h3 className="text-center">{project.title}</h3>
                    <img
                      src={project.imgUrl}
                      alt={project.title}
                      className="project-details-image"
                    />
                    <p className="project-description">{project.description}</p>
                  </Tab.Pane>
                ))}
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
