import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png"; // Correct path for your background image
import "../App.css"; // Assuming your CSS file for additional styles is properly imported

export const Experience = () => {
  const experiences = [
    {
      role: "Software Developer",
      company: "T-Mobile",
      location: "Frisco, Texas",
      duration: "May 2025 – Present",
      description: [
        `Contributed to the Core Account Management Services (CAMS) modernization by developing and supporting Spring Boot based microservices handling high-volume customer account operations.`,
        `Executed Spring Boot upgrades across multiple applications, resolving dependency conflicts, configuration changes, and regression issues, improving platform stability and build success rates.`,
        `Enhanced API error handling by standardizing response models and ensuring backward compatibility across versions.`,
        `Implemented fine-grained authorization logic to validate incoming request tokens against account specific identifiers in the payload, ensuring users can only access or modify resources tied to their own accounts, enforcing contextual access control beyond standard role checks.`,
        `Implemented structured logging and distributed tracing, enabling end-to-end request visibility and improving debugging efficiency across distributed microservices.`,
        `Integrated RabbitMQ for asynchronous inter-service communication, improving decoupling and supporting reliable event-driven workflows across the platform.`,
        `Developed and optimized database queries, indexing strategies, and database interactions using Spring Data JPA to improve application performance and reliability.`,
        `Built and deployed containerized applications using Docker and Kubernetes, supporting scalable and resilient microservices architecture.`,
        `Automated CI/CD pipelines using GitLab, enabling faster builds, testing, and deployments with reduced manual effort.`,
        `Provided production support by analyzing Splunk logs, triaging distributed failures, and coordinating fixes under SLA.`,
        `Developed internal dashboards using React for monitoring application health, deployments, runtime metrics, and performance across environments.`,
      ],
    },
    {
      role: "Software Developer",
      company: "Discover Financial Services",
      location: "Dallas, Texas",
      duration: "Aug 2024 – Apr 2025",
      description: [
        `Designed and developed a microservices-based claims processing system using Spring Boot, Oracle SQL, React and Kafka, enabling dynamic form rendering, seamless data handling, and real-time tracking of claim statuses and user interactions.`,
        `Built responsive front-end applications with React, Redux, and RTK Query, optimizing state management, data fetching, and user experience across enterprise-facing tools.`,
        `Integrated SonarQube into CI/CD pipelines for automated static code analysis, ensuring code quality and early detection of vulnerabilities in Java Spring Boot and front-end applications.`,
        `Implemented Spring Security and OAuth 2.0 for secure RESTful APIs, enabling role-based access control and robust authentication for internal and third-party users.`,
        `Integrated Apache Kafka for real-time event streaming and asynchronous communication between distributed services.`,
        `Deployed and managed scalable infrastructure using Docker and Kubernetes, ensuring fault tolerance, automated scaling, and consistent deployment across environments.`,
        `Utilized Redis for caching frequently accessed claims data, reducing database load and improving API response times.`,
        `Integrated Splunk for centralized logging and real-time monitoring, enabling proactive issue detection and operational visibility across services.`,
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Cognizant",
      location: "Hyderabad, India",
      duration: "Apr 2021 – Dec 2022",
      description: [
        `Built scalable insurance policy and claims management applications using Java, Spring Boot, and React, following TDD and Agile practices.`,
        `Developed Spring Boot microservices with RESTful APIs supporting policy issuance, claims adjudication, and customer onboarding workflows.`,
        `Implemented event-driven processing using Apache Kafka for reliable, asynchronous handling of claims and policy updates.`,
        `Built a ReactJS front-end for insurance agents to manage and track policies and claims dynamically.`,
        `Designed and provisioned AWS infrastructure (EC2, S3, Route 53) and integrated SQS/SNS for real-time insurance notifications and customer communications.`,
        `Implemented centralized logging with Log4j, reducing error detection and resolution time in production environments.`,
        `Managed build pipelines using Maven and Gradle; contributed across the full SDLC in an Agile product team.`,
      ],
    },
    {
      role: "Jr. Software Developer",
      company: "HSBC Bank",
      location: "Hyderabad, India",
      duration: "Apr 2020 – Apr 2021",
      description: [
        `Developed and optimized backend microservices using Java 8, Spring Boot, and Spring Data JPA, improving transaction processing by 40%.`,
        `Designed and deployed RESTful APIs to handle high-volume client requests, ensuring high availability and seamless integration with Angular applications.`,
        `Automated CI/CD pipelines using Jenkins, increasing deployment efficiency and improving team productivity by 30%.`,
        `Secured APIs using JWT and OAuth for role-based access control, ensuring compliance with financial security standards.`,
        `Integrated Prometheus and Grafana for real-time system monitoring, improving observability and performance tuning.`,
        `Increased code quality with 85% test coverage using JUnit, reducing production issues by 30%.`,
      ],
    },
  ];

  const containerStyle = {
    backgroundImage: `url(${colorSharp2})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    padding: "50px 0",
  };

  return (
    <section
      className="experience-content"
      style={containerStyle}
      id="experience"
    >
      <Container>
        <Row>
          <Col>
            <h2 className="experience-heading text-center">Experience</h2>{" "}
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`experience-card-container ${
                    index % 2 === 0 ? "left" : "right"
                  }`}
                >
                  <div className="circle"></div>
                  <div className="experience-card">
                    <h3>{exp.role}</h3>
                    <span className="company">{exp.company}</span>
                    <h4>{exp.location}</h4>
                    <h4>{exp.duration}</h4>
                    <ul>
                      {exp.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
