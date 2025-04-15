import React, { useState } from "react";
import { Layout, Menu, Drawer, Button } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  FileTextOutlined,
  ProjectOutlined,
  PhoneOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Link } from "react-scroll";

const { Header } = Layout;

const Navbar = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => setDrawerVisible(true);
  const onClose = () => setDrawerVisible(false);

  const menuItems = [
    { key: "home", label: "Home", icon: <HomeOutlined /> },
    { key: "about", label: "About", icon: <UserOutlined /> },
    { key: "skills", label: "Skills", icon: <FileTextOutlined /> },
    { key: "projects", label: "Projects", icon: <ProjectOutlined /> },
    { key: "contact", label: "Contact", icon: <PhoneOutlined /> },
  ];

  const renderMenu = (mode = "horizontal", onClick = () => {}) => (
    <Menu
      mode={mode}
      theme="dark"
      onClick={onClick}
      style={{
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "15px",
        backgroundColor: mode === "vertical" ? "#001529" : "transparent",
        border: "none",
      }}
    >
      {menuItems.map(({ key, label, icon }) => (
        <Menu.Item
          key={key}
          style={{
            padding: mode === "vertical" ? "12px 20px" : "0 15px",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Link to={key} smooth duration={500}>
            {icon}
            <span>{label}</span>
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        backgroundColor: "#001529",
        padding: "0 20px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "64px",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="/MyLogo.png"
            alt="Logo"
            style={{ height: "45px", borderRadius: "50%" }}
          />
        </div>

        {/* Desktop Menu */}
        <div className="desktop-menu">{renderMenu()}</div>

        {/* Mobile Hamburger Icon */}
        <div className="mobile-menu-button">
          <Button
            type="text"
            icon={<MenuOutlined style={{ fontSize: "22px", color: "#fff" }} />}
            onClick={showDrawer}
          />
        </div>
      </div>

      {/* Drawer for Mobile */}
      <Drawer
        placement="right"
        onClose={onClose}
        visible={drawerVisible}
        width={220}
        bodyStyle={{
          padding: 0,
          backgroundColor: "#001529",
        }}
        headerStyle={{
          backgroundColor: "#001529",
          borderBottom: "1px solid #333",
          color: "#fff",
          fontSize: "18px",
        }}
      >
        <div style={{ marginTop: "20px" }}>{renderMenu("vertical", onClose)}</div>
      </Drawer>

      {/* CSS for responsive behavior */}
      <style jsx>{`
        .desktop-menu {
          display: flex;
        }

        .mobile-menu-button {
          display: none;
        }

        @media (max-width: 768px) {
          .desktop-menu {
            display: none;
          }

          .mobile-menu-button {
            display: block;
          }
        }
      `}</style>
    </Header>
  );
};

export default Navbar;
