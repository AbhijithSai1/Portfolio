import React from "react";
import { motion } from "framer-motion";
import {
  FaJava,
  FaPython,
  FaJs,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaReact,
  FaLinux,
  FaGit,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaShieldAlt,
  FaKey,
  FaUserShield,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiHibernate,
  SiAngular,
  SiBootstrap,
  SiRedis,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiOracle,
  SiJenkins,
  SiKubernetes,
  SiIntellijidea,
  SiJira,
  SiPostman,
  SiApachekafka,
  SiTypescript,
  SiGraphql,
  SiJest,
  SiEclipseide,
  SiRedux,
  SiTerraform,
  SiGitlab,
  SiRabbitmq,
  SiPrometheus,
  SiGrafana,
  SiSplunk,
  SiSonarqube,
  SiVisualstudiocode,
  SiApachemaven,
  SiGnubash,
  SiExpress,
} from "react-icons/si";
import { Container, Row, Col } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Skills = () => {
  const skills = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Java", icon: <FaJava /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "SQL", icon: <FaDatabase /> },
        { name: "Python", icon: <FaPython /> },
        { name: "TypeScript", icon: <SiTypescript /> },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "Spring Cloud", icon: <SiSpringboot /> },
        { name: "Spring Data JPA", icon: <SiSpringboot /> },
        { name: "Hibernate", icon: <SiHibernate /> },
        { name: "Spring AI", icon: <SiSpringboot /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express", icon: <SiExpress /> },
      ],
    },
    {
      category: "Frontend",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "Redux", icon: <SiRedux /> },
        { name: "RTK Query", icon: <SiRedux /> },
        { name: "Angular", icon: <SiAngular /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
      ],
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "AWS", icon: <FaAws /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "Kubernetes", icon: <SiKubernetes /> },
        { name: "Jenkins", icon: <SiJenkins /> },
        { name: "Terraform", icon: <SiTerraform /> },
        { name: "GitLab CI/CD", icon: <SiGitlab /> },
        { name: "Bash", icon: <SiGnubash /> },
        { name: "Linux", icon: <FaLinux /> },
        { name: "Git", icon: <FaGit /> },
      ],
    },
    {
      category: "Databases & Messaging",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "Oracle DB", icon: <SiOracle /> },
        { name: "Apache Kafka", icon: <SiApachekafka /> },
        { name: "RabbitMQ", icon: <SiRabbitmq /> },
        { name: "Redis", icon: <SiRedis /> },
        { name: "SQL Server", icon: <FaDatabase /> },
        { name: "GraphQL", icon: <SiGraphql /> },
      ],
    },
    {
      category: "Security",
      skills: [
        { name: "Spring Security", icon: <SiSpringboot /> },
        { name: "OAuth2", icon: <FaShieldAlt /> },
        { name: "Keycloak", icon: <FaKey /> },
        { name: "JWT", icon: <FaKey /> },
        { name: "RBAC", icon: <FaUserShield /> },
      ],
    },
    {
      category: "Monitoring & Logging",
      skills: [
        { name: "Prometheus", icon: <SiPrometheus /> },
        { name: "Grafana", icon: <SiGrafana /> },
        { name: "Splunk", icon: <SiSplunk /> },
        { name: "SonarQube", icon: <SiSonarqube /> },
      ],
    },
    {
      category: "Testing",
      skills: [
        { name: "JUnit", icon: <FaJava /> },
        { name: "Mockito", icon: <FaJava /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "TestNG", icon: <FaJava /> },
        { name: "Jest", icon: <SiJest /> },
        { name: "Jasmine", icon: <SiJest /> },
      ],
    },
    {
      category: "Tools & IDEs",
      skills: [
        { name: "Jira", icon: <SiJira /> },
        { name: "Maven", icon: <SiApachemaven /> },
        { name: "GitLab", icon: <SiGitlab /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "IntelliJ IDEA", icon: <SiIntellijidea /> },
        { name: "VS Code", icon: <SiVisualstudiocode /> },
        { name: "Eclipse", icon: <SiEclipseide /> },
      ],
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const iconMotion = {
    animate: {
      x: [0, 10, 0],
      transition: {
        repeat: Infinity,
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  const containerStyle = {
    backgroundImage: `url(${colorSharp2})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    padding: "50px 0",
  };

  return (
    <section className="skill" id="skills" style={containerStyle}>
      <Container>
        <h2>Skills</h2>
        <p>Below are the skills I have experience on:</p>
        {skills.map((category, index) => (
          <motion.div
            key={index}
            className="skill-category"
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
            viewport={{ once: true }}
          >
            <Row>
              <Col>
                <h3 className="text-center">{category.category}</h3>
                <motion.div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="skill-item"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      animate={iconMotion.animate}
                    >
                      {skill.icon}
                      <h5>{skill.name}</h5>
                    </motion.div>
                  ))}
                </motion.div>
              </Col>
            </Row>
          </motion.div>
        ))}
      </Container>
    </section>
  );
};
