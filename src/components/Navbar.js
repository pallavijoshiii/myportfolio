import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  FileTextOutlined,
  ProjectOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Link } from "react-scroll";

const { Header } = Layout;

function Navbar() {
  const [current, setCurrent] = useState("2");

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Header
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
        backgroundColor: "#001529",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 24px",
        }}
      >
        {/* Logo or Brand Name */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="/MyLogo.png"
            alt="Logo"
            style={{ height: "50px", borderRadius: "50%" }}
          />
        </div>

        {/* Navigation Menu */}
        <Menu
          theme="dark"
          mode="horizontal"
          onClick={handleClick}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "auto",
            alignItems: "center",
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          <Menu.Item key="1">
            <Link to="home" smooth duration={500}>
              <HomeOutlined /> Home
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="about" smooth duration={500}>
              <UserOutlined /> About Me
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="skills" smooth duration={500}>
              <FileTextOutlined /> Skills
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="projects" smooth duration={500}>
              <ProjectOutlined /> Projects
            </Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="contact" smooth duration={500}>
              <PhoneOutlined /> Contact
            </Link>
          </Menu.Item>
        </Menu>
      </div>

      {/* CSS to style active and remove background color */}
      <style jsx>{`
        .ant-menu-item-active {
          background-color: transparent !important; /* Remove background color */
          color: #fff !important; /* Ensure text color is white */
        }

      `}</style>
    </Header>
  );
}

export default Navbar;
