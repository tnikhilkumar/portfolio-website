import React from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import sv1 from "../images/sv1.jpg";
import sv2 from "../images/sv2.jpg";
import sv3 from "../images/sv3.jpg";

const Services = () => {
  const serviceList = [
    {
      id: 1,
      name: "Web Development",
      imageUrl: sv2,
    },
    {
      id: 2,
      name: "Freelance website",
      imageUrl: sv1,
    },
    {
      id: 3,
      name: "Affliate Marketing",
      imageUrl: sv3,
    },
  ];

  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
    >
      <div className="services">
        <h2>Services</h2>
        <div className="wrapper">
          {serviceList.map((item) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 1, ease: "easeInOut" },
                }}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.5 },
                }}
              >
                <Card>
                  <Card.Img variant="top" src={item.imageUrl} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                  </Card.Body>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
