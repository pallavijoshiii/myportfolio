// components/Footer.js

import React from 'react';
import { Space } from 'antd';
import { MailOutlined, InstagramOutlined, LinkedinOutlined, GithubOutlined } from '@ant-design/icons';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#001529', color: '#fff', padding: '20px 0', textAlign: 'center' }}>
      <div>
        <Space size="large">
          <a href="mailto:pallavijoshi0222@gmail.com" style={{ color: '#fff' }}>
            <MailOutlined style={{ fontSize: '20px' }} />
          </a>
          <a href="https://www.instagram.com/pallaviiii_2122/?next=%2F&hl=en" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
            <InstagramOutlined style={{ fontSize: '20px' }} />
          </a>
          <a href="https://www.linkedin.com/in/pallavi-joshi-22a21335a/?trk=opento_sprofile_topcard" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
            <LinkedinOutlined style={{ fontSize: '20px' }} />
          </a>
          {/* GitHub Link */}
          <a href="https://github.com/pallavijoshiii" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
            <GithubOutlined style={{ fontSize: '20px' }} />
          </a>
        </Space>
      </div>
      {/* <div style={{ marginTop: '20px' }}>
        MyProfile ©2025
      </div> */}
    </footer>
  );
}

export default Footer;
