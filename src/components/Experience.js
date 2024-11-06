import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png"; // Correct path for your background image
import "../App.css"; // Assuming your CSS file for additional styles is properly imported

export const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Morgan Stanley",
      location: "TX, USA",
      duration: "Jan 2024 - Present",
      description: [
        `Developed and maintained backend services using Kotlin, Java, Spring Boot, and Hibernate, improving system reliability
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
    },
    {
      role: "Full Stack Developer",
      company: "Aspen Insurance",
      location: "Hyderabad, India",
      duration: "Apr 2021 - Dec 2022",
      description: [
        `Optimized backend services using Java and Spring Boot, reducing response times by 40% and directly enhancing system
        performance, user satisfaction, leading to increased customer retention.`,
        `Utilized Kubernetes and Docker for containerized deployments, ensuring scalability and resource efficiency.`,
        `Designed and developed REST APIs to enable seamless data exchange between frontend and backend systems, enhancing
data flow and driving a 20% increase in operational efficiency, leading to faster decision-making for business processes.`,
        `Developed and enforced server-side validations and robust security measures, ensuring high data integrity, reducing data
breaches by 25%, and significantly lowering system errors, which increased customer trust and reduced support tickets.`,
        `Engineered a scalable serverless infrastructure leveraging AWS services (API Gateway, Lambda, DynamoDB), cutting
operational costs by 20%. This solution allowed the company to scale services dynamically, accommodating growing
customer demand without performance degradation.`,
        `Integrated Apache Kafka for real-time messaging, boosting data processing efficiency by 30% and reducing deployment
time by 25% through effective CI/CD practices, enabling faster release cycles and more responsive business operations.`,
        `Developed and managed payment processing services with Java, Spring Boot, AWS Cloud reducing errors by 20% and
improving transaction reliability, leading to an 18% increase in successful transactions and a smoother user experience.`,
      ],
    },
    // {
    //   role: "Full Stack Engineer Intern",
    //   company: "Verzeo Technologies",
    //   location: "Hyderabad, India",
    //   duration: "Apr 2020 - Aug 2020",
    //   description: [
    //     "Developed and maintained applications using Java and Angular.",
    //     "Developed RESTful APIs, improving data exchange efficiency.",
    //     "Managed containerized applications with Docker and Kubernetes.",
    //     "Implemented security best practices, ensuring data integrity.",
    //   ],
    // },
  ];

  /*
export const Experience = () => {
 const experiences = [
    {
      role: "Software Engineer",
      company: "McAfee",
      location: "TX, USA",
      duration: "Jan 2024 - Aug 2024",
      description: [
        `Developed backend services using Java and Spring Boot, improving system reliability and reducing downtime by 10%, leading to smoother customer transactions.`,
        `Architected microservices with Spring Boot and Hibernate, which accelerated feature deployment by 15% and enhanced system modularity, resulting in easier maintenance and scalability.`,
        `Integrated advanced messaging systems such as Kafka and RabbitMQ, increasing data processing efficiency by 15% and enabling more responsive data-driven applications.`,
        `Refined CI/CD pipelines with Jenkins and Docker, automating build and deployment processes, reducing deployment times by 20%, and minimizing manual errors during releases.`,
        `Implemented AWS Cloud Services including EC2, S3, and Lambda, which contributed to resilient solutions and improved system performance, leading to a 10% reduction in operational costs.`,
        `Collaborated with cross-functional teams in an Agile environment, ensuring that 85% of sprint goals were consistently met, contributing to the overall success of software delivery.`,
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Aspen Insurance",
      location: "Hyderabad, India",
      duration: "Apr 2021 - Dec 2022",
      description: [
        `Enhanced backend services with Java and Spring Boot, reducing response times by 40% and improving overall system performance, which resulted in faster claim processing and improved client interactions, increasing customer retention.`,
        `Developed payment processing services on Azure Cloud, reducing errors in premium payments by 20% and increasing successful transactions by 18%, leading to a more reliable and efficient payment system for policyholders.`,
        `Created and integrated REST APIs with GraphQL, improving data flow between underwriting, claims, and customer service systems, increasing operational efficiency by 20%, and enabling quicker and more accurate policy adjustments.`,
        `Strengthened security by implementing strong server-side validations, reducing data breaches by 25% and minimizing policyholder data errors, which increased trust and reduced the number of security-related incidents.`,
        `Streamlined containerized deployments using Kubernetes and Docker on Azure, ensuring scalability and compliance with industry regulations, enabling smoother updates and maintenance of critical insurance applications.`,
        `Built serverless infrastructure on Azure, reducing operational costs by 20% and enabling dynamic scaling to handle fluctuations in claims processing and policy issuance during peak periods.`,
        `Leveraged Azure Event Hubs for real-time messaging, improving the efficiency of data processing related to claims, underwriting, and customer interactions by 30%, allowing for quicker decision-making and enhanced customer service.`,
      ],
    },
    {
      role: "Full Stack Engineer Intern",
      company: "Verzeo Technologies",
      location: "Hyderabad, India",
      duration: "Nov 2020 - Apr 2021",
      description: [
        `Developed and maintained applications using Java and Angular, ensuring responsiveness and cross-browser compatibility.`,
        `Designed and implemented RESTful APIs to enable seamless data exchange between frontend and backend systems.`,
        `Developed and deployed containerized applications using Docker and managed them using Kubernetes.`,
        `Collaborated with the frontend team to optimize the user interface and improve performance across devices and browsers.`,
        `Contributed to CI/CD pipelines using Jenkins to automate build and deployment processes.`,
        `Implemented security best practices to ensure data integrity and protection within applications.`,
      ],
    },
  ];
  */
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
