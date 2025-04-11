import React from 'react';
import { Typography, Row, Col, Button } from 'antd';
import { motion } from 'framer-motion';
import '../styles/Home.css';

const { Title, Paragraph } = Typography;

function Home() {
  const resumePath = "/myresume.pdf";

  return (
    <div className="home-container">
      <Row justify="center" align="middle" className="home-row">
        <Col xs={24} md={20} lg={16}>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="intro-text"
          >
            <Title level={1} className="home-title">
              Hello, I'm <span className="highlight-text">Pallavi Joshi</span>
            </Title>
            <Paragraph className="home-paragraph">
  I'm a creative <span className="highlight-text2">Web Developer</span> with experience in <span className="highlight-text2">React</span>, <span className="highlight-text2">Node.js</span> & building beautiful, functional UIs.  
  I also leverage tools like <span className="highlight-text2">ChatGPT</span> to streamline development and bring innovative ideas to life.  
  Let's connect and make something impactful!
</Paragraph>

            <div className="home-buttons">
              <a href={resumePath} download className="resume-link">
                <Button className="resume-btn">Download Resume</Button>
              </a>
              <Button type="primary" size="large" href="#contact" className="contact-btn">
                Contact Me
              </Button>
            </div>
          </motion.div>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
