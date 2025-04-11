import React from "react";
import { Typography, Row, Col, Card, Button } from "antd";
import { motion } from "framer-motion";

const { Title, Paragraph } = Typography;

function About() {

  return (
    <div style={{ color: "#F4F4F4" }}>
      <Title
        level={2}
        style={{
          color: "#09577e",
          fontFamily: "'Montserrat', sans-serif",
          marginBottom: "30px",
        }}
      >
        About Me
      </Title>
      <Row gutter={16} justify="center">
        <Col xs={24} sm={12}>
          {/* Personal Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Card
              title={
                <span
                  style={{
                    color: "#09577e",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Personal Bio
                </span>
              }
              bordered={false}
              style={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                color: "#F4F4F4",
                padding: "20px",
              }}
            >
              <Paragraph
                style={{
                  fontSize: "16px",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                I’m Pallavi Joshi, a Web Developer with a Bachelor's in
                Education and a Yoga certification. I specialize in React.js for
                front-end development and am proficient in Node.js and Express.js
                for building backend systems. I also have experience with MongoDB,
                HTML, and CSS, focusing on creating responsive and scalable web
                applications.
              </Paragraph>
            </Card>
          </motion.div>
        </Col>
        <Col xs={24} sm={12}>
          {/* Timeline Card */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Card
              title={
                <span
                  style={{
                    color: "#09577e",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Timeline
                </span>
              }
              bordered={false}
              style={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                color: "#F4F4F4",
                padding: "20px",
              }}
            >
              <Paragraph
                style={{
                  fontSize: "16px",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                - 2024: Began my journey into Front-End Development.
                <br />
                - 2025: Transitioned to Full-Stack Development, specializing in
                React & Node.js.
                <br />
                - 2025: Currently working as a Full-Stack Developer at Pinaka
                Software Solutions.
                <br />
                - 2025: Graduated with a Bachelor's degree in Education.
              </Paragraph>
            </Card>
          </motion.div>
        </Col>
      </Row>
    </div>
  );
}

export default About;
