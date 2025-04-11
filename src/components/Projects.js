import React from 'react';
import { Row, Col, Typography } from 'antd';
import ProjectCard from '../Layouts/ProjectCard'; // Import the ProjectCard component

const { Title } = Typography;

function Projects() {
  // Define your project data (can be fetched from an API or static data)
  const projects = [
    {
      title: 'Ghadi',
      description: 'Ghadi is a simple time-keeping app built with React.js that accurately displays the current time.',
      link: 'https://github.com/pallavijoshiii/ghadi',
    },
    {
      title: 'Tasks',
      description: 'A task management app built with React, featuring a calculator and user/employee task management.',
      link: 'https://github.com/pallavijoshiii/tasks',
    }
    
    ,
    {
      title: 'Profile',
      description: 'A simple portfolio website built with React, showcasing a few of my projects.',
      link: 'https://github.com/pallavijoshiii/profile',
    },
    {
      title: 'Recoil Shop Starter',
      description: 'A React app using Recoil for state management, designed to manage vegetables and fruits inventory.',
      link: 'https://github.com/pallavijoshiii/recoil-shop-starter',
    }
    ,
    {
      title: 'JavaScript projects',
      description: 'A collection of small projects created while learning JavaScript, covering basic concepts and functionalities.',
      link: 'https://github.com/pallavijoshiii/practiceone',
    }
    ,
    {
      title: 'Mini Project Backend',
      description: 'A backend project built to learn server setup, API creation, and database integration.',
      link: 'https://github.com/pallavijoshiii/Mini_Project_backend',
    }
    
    
    
    
    
    
  ];

  return (
    <div style={{ padding: '20px' }}>
      <Title
        level={2}
        style={{
          color: '#09577e',
          fontFamily: "'Montserrat', sans-serif",
          marginBottom: '30px',
        }}
      >
        Projects
      </Title>

      {/* Grid layout with responsive columns */}
      <Row gutter={16} justify="center">
        {projects.map((project, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <ProjectCard project={project} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Projects;


