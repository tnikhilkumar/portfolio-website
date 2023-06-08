import React from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import project1 from "../images/project1.jpg";
import project2 from "../images/project2.jpg";
import project3 from "../images/project3.jpg";
import project4 from "../images/project4.jpg";
import projectX from "../images/projectX.jpg";

const Projects = () => {
  const projectList = [
    {
      id: 1,
      name: "Next.js Blog Post App",
      subtitle: "Live project - 🔗",
      link: "https://next-js-app-umber-xi.vercel.app/",
      imageUrl: project1,
    },
    {
      id: 2,
      name: "Meal Planner App",
      subtitle: "Live project - 🔗",
      link: "https://plan-your-own-meal.netlify.app",
      imageUrl: project2,
    },
    {
      id: 3,
      name: "Employee Management CRUD",
      subtitle: "Live project - 🔗",
      link: "https://incandescent-macaron-fec468.netlify.app",
      imageUrl: project3,
    },
    {
      id: 4,
      name: "Restaurant Order Taking App",
      subtitle: "Live project - 🔗",
      link: "https://lustrous-faun-3f6df1.netlify.app",
      imageUrl: project4,
    },
    {
      id: 5,
      name: "coming soon",
      imageUrl: projectX,
    },
    {
      id: 6,
      name: "coming soon",
      imageUrl: projectX,
    },
  ];

  return (
    <motion.div
      animate={{
        scale: [2, 1],
        rotate: [5, 0],
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="projects"
    >
      <h2>Projects</h2>
      <div className="wrapper">
        {projectList.map((item) => {
          return (
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
              key={item.id}
            >
              <Card>
                <Card.Img variant="top" src={item.imageUrl} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  {item.subtitle && (
                    <Card.Text>
                      <a className="project-link" href={item.link} target="_blank" rel="noopener noreferrer">
                        {item.subtitle}
                      </a>
                    </Card.Text>
                  )}
                </Card.Body>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Projects;
