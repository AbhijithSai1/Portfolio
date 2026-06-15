import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion"; // For animations
import colorSharp from "../assets/img/color-sharp.png"; // Background image

export const Education = () => {
  const educationData = [
    {
      degree: "Master of Science in Information Technology",
      institution: "University of Cincinnati, Cincinnati, OH",
      year: "Jan 2023 - April 2024",
      gpa: "4/4", // GPA is added separately to highlight it
      description: `
        Relevant coursework: Principles of Cybersecurity, Information Security and Assurance, Machine Learning and Data Mining, Tech for Mobile Applications, Advanced System Administration, Advanced Storage Technologies.
      `,
    },
    {
      degree:
        "Bachelor of Engineering in Electronics and Communication Engineering",
      institution: "Osmania University, Hyderabad, India",
      // year: "Aug 2017 - July 2021",
      gpa: "8.05/10", // CGPA is added separately to highlight it
      description: `
        Relevant coursework: Computer Organization & Architecture, Computer Networking, Web Programming, Computer Aided Design Tools.
      `,
    },
  ];

  // Framer Motion animation settings
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="education" id="education">
      <Container>
        <Row>
          <Col>
            <motion.div
              className="education-bx"
              initial="hidden"
              whileInView="visible"
              variants={sectionVariants}
              viewport={{ once: true }}
            >
              <h2 className="text-center">Education</h2>
              <div className="education-list">
                {educationData.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="education-item"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="degree-title text-center">{edu.degree}</h3>
                    <h4 className="institution text-center">
                      {edu.institution}
                    </h4>
                    <p className="text-center">
                      {edu.year && (
                        <>
                          <strong>{edu.year}</strong> |{" "}
                        </>
                      )}
                      <span className="highlight-gpa">GPA: {edu.gpa}</span>
                    </p>
                    <p className="description text-center">
                      {edu.description.split("•").map((item, i) => (
                        <span key={i}>
                          {item && `${item}`}
                          <br />
                        </span>
                      ))}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp}
        alt="Background"
      />
    </section>
  );
};
