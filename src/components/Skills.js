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
  FaWindows,
  FaGit,
  FaDatabase,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiExpress,
  SiHibernate,
  SiAngular,
  SiBootstrap,
  SiRedis,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiOracle,
  SiTeradata,
  SiSnowflake,
  SiTypescript,
  SiGraphql,
  SiJenkins,
  SiKubernetes,
  SiJest,
  SiEclipseide,
  SiIntellijidea,
  SiJira,
  SiPostman,
  SiApachekafka,
} from "react-icons/si";
import { MdWaterfallChart } from "react-icons/md";
import { Container, Row, Col } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png"; // Background image

export const Skills = () => {
  const skills = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Java/J2EE", icon: <FaJava /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "Python", icon: <FaPython /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "C++", icon: <FaJava /> }, // Placeholder for C++
      ],
    },
    {
      category: "Technologies & Frameworks",
      skills: [
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "Hibernate", icon: <SiHibernate /> },
        { name: "React JS", icon: <FaReact /> },
        { name: "Angular", icon: <SiAngular /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
        { name: "Redis", icon: <SiRedis /> },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "Oracle", icon: <SiOracle /> },
        { name: "SQL Server", icon: <FaDatabase /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "Teradata", icon: <SiTeradata /> },
        { name: "Snowflake", icon: <SiSnowflake /> },
        { name: "PL/SQL", icon: <SiOracle /> }, // Using Oracle for PL/SQL
        { name: "GraphQL", icon: <SiGraphql /> },
      ],
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "AWS", icon: <FaAws /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "Kubernetes", icon: <SiKubernetes /> },
        { name: "Jenkins", icon: <SiJenkins /> },
        { name: "Git", icon: <FaGit /> },
      ],
    },
    {
      category: "Operating Systems",
      skills: [
        { name: "Linux", icon: <FaLinux /> },
        { name: "Windows", icon: <FaWindows /> },
        { name: "MacOS", icon: <FaLinux /> }, // Placeholder for MacOS
      ],
    },
    {
      category: "Tools & Testing",
      skills: [
        { name: "Jest", icon: <SiJest /> },
        { name: "Jasmine", icon: <SiJest /> }, // Placeholder for Jasmine
        { name: "Eclipse", icon: <SiEclipseide /> },
        { name: "IntelliJ", icon: <SiIntellijidea /> },
        { name: "Jira", icon: <SiJira /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "Apache Kafka", icon: <SiApachekafka /> },
      ],
    },
    {
      category: "Methodologies",
      skills: [
        { name: "Waterfall", icon: <MdWaterfallChart /> },
        { name: "OOAD", icon: <FaJava /> }, // Placeholder for OOAD
        { name: "ETL Processes", icon: <FaDatabase /> }, // Placeholder for ETL
      ],
    },
  ];

  // Framer Motion animation variants for section reveal
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // Animation for moving icons
  const iconMotion = {
    animate: {
      x: [0, 10, 0], // Movement pattern for icons
      transition: {
        repeat: Infinity,
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  // Background styling
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
        <p>Below are the skills I have experinece on:</p>
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
                      animate={iconMotion.animate} // Icons moving animation
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
