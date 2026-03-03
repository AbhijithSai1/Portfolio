import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png"; // Correct path for your background image
import "../App.css"; // Assuming your CSS file for additional styles is properly imported

export const Experience = () => {
  const experiences = [
   /* {
      role: "Full Stack Developer",
      description: [
        `Developed and maintained Morgan Stanley backend services using Kotlin, Java, Spring Boot, and Hibernate, improving system reliability
        and reducing downtime by 15% through effective troubleshooting and problem-solving.`,
        `Architected microservices for core banking functions, accelerating feature deployment by 20% and enhancing modularity
        through innovative design patterns in Kotlin.`,
        `Integrated Elastic Search and Kafka for real-time transaction processing and fraud detection, improving data processing
        efficiency by 18% and reducing response times for critical banking operations.`,
        `Worked closely within an Agile Environment, consistently meeting 90% of sprint goals and delivering high-quality
        features for online banking platforms, with a focus on Test Driven Development (TDD) in Kotlin.`,
        `Enhanced CI/CD pipelines using Jenkins and Docker, reducing deployment times for banking services by 25% and
        minimizing errors through thorough security scans and testing.`,
        `Optimized data storage and retrieval for customer accounts and transactions by leveraging Cassandra and PostgreSQL,
        ensuring scalability and high performance for millions of daily banking operations.`,
        `Utilized AWS Cloud Services to implement secure, compliant banking solutions, contributing to a 12% reduction in
        operational costs while maintaining strict financial regulatory standards.`,
        `Supported production environments for critical banking services by troubleshooting issues and ensuring 99.99% uptime,
        addressing security risks and regulatory compliance effectively.`,
        `Implemented robust API security measures using Spring Security and OAuth2, enhancing protection of sensitive financial
        data and ensuring compliance with banking regulations.`,
        `Leveraged Kotlin’s null safety features and concise syntax to reduce boilerplate code by 30% in banking microservices,
        improving code maintainability and reducing potential runtime errors.`,
      ],
    },*/
    {
  role: "Software Developer",
  company: "T-Mobile",
  location: "Frisco, TX, USA",
  duration: "May 2025 - Present",
  description: [
    `Contributed to CAMS (Core Account Management Services) modernization by developing and supporting Spring Boot-based microservices handling high-volume customer account operations across distributed environments.`,
    `Executed Spring Boot upgrades across multiple services (3.5.x), resolving dependency conflicts, configuration drift, and regression issues, improving build stability and reducing environment-specific failures by 30%.`,
    `Led security vulnerability remediation for 40+ microservices, upgrading vulnerable libraries (OpenSSL, OkHttp, Jackson, Maven plugins) and resolving critical CVEs, ensuring enterprise security compliance and reducing vulnerability backlog to near zero.`,
    `Implemented enterprise structured logging using Common Logger by replacing legacy Logback across Controller, Service, Endpoint, and Mapper layers, enabling end-to-end request/response traceability and improving MTTR during production incidents.`,
    `Enabled GUID-based transaction tracing, payload masking, and event classification, significantly improving observability in Splunk dashboards and reducing debugging effort by 40%.`,
    `Standardized SOAP error handling by enhancing response schemas with statusCategory, errorSystem, and transaction identifiers while maintaining backward compatibility through version-controlled WSDL updates.`,
    `Contributed to Authorization (AuthZ) integration by implementing gateway token validation and role-based access control policies, strengthening API security posture across services.`,
    `Supported containerized deployments on Kubernetes (TKE) by building Docker images and executing environment promotions (DEV → QLAB → PROD), including canary deployment validations and rollback verification.`,
    `Leveraged GitLab CI/CD pipelines to automate builds, vulnerability scans, and deployments, reducing manual release effort and ensuring consistent deployment governance.`,
    `Provided on-call production support by triaging incidents via Splunk log analysis, identifying upstream vs downstream failures, and coordinating cross-team fixes to restore services within SLA timelines.`,
    `Assisted in Hystrix resiliency refactoring by validating fallback logic and timeout configurations through backend simulation testing, improving service fault tolerance.`,
    `Enabled legacy SOAP to modern microservices integrations by implementing contract mapping, payload transformations, and compatibility validation between REST and SOAP layers.`,
    `Managed secure configuration and secrets using Vault for environment-specific deployments, ensuring compliance with enterprise security standards.`,
    `Built a lightweight React-based operational dashboard providing real-time visibility into application health, environment-wise deployments, runtime Java/Spring Boot versions, and Git release metadata (deployer, timestamp, commit), enhancing audit traceability and production transparency.`
  ],
},
      {
      role: "Software Developer",
      company: "Discover",
      location: "TX, USA",
      duration: "Aug 2024 - Apr 2025",
      description: [
        `Engineered scalable software solutions using Java, Python, Spring Boot, and microservices architecture, resulting in a
30% boost in system performance and a 25% reduction in transaction processing times for critical financial operations.`,
`Optimized database operations with PostgreSQL and MongoDB, reducing query execution times by 40%, improving
system responsiveness, and enabling seamless high-volume data processing.`,
`Migrated legacy systems to AWS and Azure, achieving a 20% reduction in infrastructure costs, enhancing scalability, and
bolstering disaster recovery capabilities.`,
`Automated build and deployment pipelines using Jenkins, Docker, and Kubernetes, decreasing deployment cycles by 50%
and ensuring error-free production releases.`,
`Enhanced application security with Spring Security and encryption protocols, ensuring compliance with PCI DSS and
mitigating security risks for sensitive customer data.`,
`Delivered user-friendly, responsive interfaces using React.js, HTML5, CSS3, and Bootstrap, improving customer
engagement and usability across applications.`,
`Conducted code reviews, and established best practices, reducing post-launch defects by 15% and fostering a culture of
continuous improvement.`,
`Designed RESTful APIs and backend services, facilitating real-time communication with third-party systems and
enhancing system integration efficiency.`,
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Cognizant",
      location: "Hyderabad, India",
      duration: "Apr 2021 - Dec 2022",
      description: [
        `Designed and developed custom single-page applications (SPAs) using React.js, AngularJS, and Tailwind CSS, improving
operational efficiency for insurance policy and claims management platforms and reducing processing time for key
workflows.`,
`Designed scalable, modular applications using Spring Boot and Hibernate, reducing system downtime by 25% and
streamlining claims validation and premium calculation processes.`,
`Created and optimized APIs using Postman and SOAP UI, enabling seamless integration with third-party systems for
real-time insurance quotes and claims tracking.`,
`Enhanced database performance using PostgreSQL, MySQL, and MongoDB, achieving a 30% improvement in query
efficiency and ensuring data consistency across modules.`,
`Secured applications with Spring Security, implementing authentication and authorization protocols that reduced security
vulnerabilities by 40%.`,
`Improved deployment pipelines using Jenkins, Docker, and Maven, increasing deployment frequency by 35% while
minimizing operational risks.`,
`Developed unit tests with JUnit and Mockito, achieving a 20% reduction in production defects by adhering to Test-Driven
Development (TDD) practices.`,
`Collaborated with cross-functional teams to align technical solutions with client requirements, delivering projects within
stringent deadlines and receiving client commendations.`,
      ],
    },


    {
      role: "Junior Software Developer",
      company: "HSBC Bank",
      location: "Hyderabad, India",
      duration: "Apr 2020 - Dec 2020",
      description: [
        `Built backend microservices using Spring Boot and Hibernate, improving scalability and enabling seamless integration
with front-end applications, resulting in a 15% increase in operational efficiency.`,
`Optimized database queries, stored procedures, and triggers in MySQL and PostgreSQL, improving data handling and
reducing query execution times by 20%.`,
`Designed and implemented RESTful and SOAP APIs, facilitating secure and efficient data exchange across banking
systems and third-party integrations.`,
`Developed dynamic, user-focused web interfaces with AngularJS, HTML5, CSS3, and jQuery, enhancing user satisfaction
and reducing support tickets by 10%.`,
`Strengthened security with Spring Security, applying role-based access controls and encryption mechanisms, ensuring
compliance with internal and external security standards.`,
`Automated deployment workflows with Jenkins and Docker, reducing manual intervention and deployment errors by 30%.`,
`Conducted comprehensive testing using JUnit and Mockito, identifying and resolving defects early, leading to a 25%
improvement in code quality.`,
`Partnered with cross-functional teams in Agile/Scrum environments to ensure timely delivery of high-priority features,
consistently meeting sprint goals.`,
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
