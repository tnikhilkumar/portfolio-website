import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import React, { useState } from "react";
import { motion } from "framer-motion";
import linkedin from "../images/linkedin.png";
import { Button, Col, Row, Form, ListGroup } from "react-bootstrap";

const Contact = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <motion.div
      className="contact"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
    >
      <h2>Contact</h2>
      <Row>
        <Col>
          <div className="contact-form">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="validationCustom01">
                <Form.Label>Name</Form.Label>
                <Form.Control required type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationCustom03">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" required placeholder="Message" />
              </Form.Group>
              <Button type="submit">Submit</Button>
            </Form>
          </div>
        </Col>
        <Col>
          <div className="contact-data">
            <p>
              If you want to chat about a project — email me on
              nikhilkumarnikky980@gmail.com.
            </p>
            <p>
              I can help designing a website, designing a new product, improving
              an existing part of your product, building a strong design system,
              building websites in Webflow, or designing a custom icon set for
              your business.{" "}
            </p>
            <p>
              Currently based in HYD, India — available for remote-friendly
              work.
            </p>
            <p>
            <ListGroup horizontal>
  <ListGroup.Item>
    <a href="https://www.linkedin.com/in/nikhil-kumar-thota-6821b3197/">
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
  </ListGroup.Item>
  <ListGroup.Item>
    <a href="https://www.instagram.com/hover.ai/">
      <FontAwesomeIcon icon={faInstagram} />
    </a>
  </ListGroup.Item>
  <ListGroup.Item>
    <a href="https://twitter.com/nikhilkumar_T">
      <FontAwesomeIcon icon={faTwitter} />
    </a>
  </ListGroup.Item>
</ListGroup>
            </p>
          </div>
        </Col>
      </Row>
    </motion.div>
  );
};

export default Contact;
