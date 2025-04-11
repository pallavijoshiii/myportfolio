import React from "react";
import { Card, Typography, Button } from "antd";

const {Paragraph } = Typography;

const ProjectCard = ({ project }) => {
  return (
    <Card
    title={
        <span
          style={{
            color: "#09577e",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          {project.title}
        </span>
      }
      bordered={false}
      style={{
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        color: "#F4F4F4",
        padding: "20px",
        marginTop:'10px'
      }}
>
       
      <Paragraph
        style={{ fontSize: "15px", fontFamily: "'Poppins', sans-serif" }}
      >
        {project.description}
      </Paragraph>
      <Button
        type="link"
        href={project.link} 
        target="_blank"
        style={{ marginTop: "10px", color: "#074463" }}
      >
        View Project
      </Button>
    </Card>
  );
};

export default ProjectCard;
