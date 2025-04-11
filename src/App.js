// App.js

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout,} from 'antd';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';  

const { Content } = Layout;

function App() {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Navbar /> {/* Navbar is used here */}
        <Content style={{ paddingTop: '64px', backgroundColor: '#f4f4f4' }}>
          <div id="home" style={{ padding: '50px 50px', background:'linear-gradient(to bottom, #f0f4f8, #e2e8f0)' }}>
            <Home />
          </div>
          <div id="about" style={{ padding: '100px 50px', backgroundColor: '#f9f9f9' }}>
            <About />
          </div>
          <div id="skills" style={{ padding: '100px 50px', backgroundColor: '#fff' }}>
            <Skills />
          </div>
          <div id="projects" style={{ padding: '100px 50px', backgroundColor: '#f9f9f9' }}>
            <Projects />
          </div>
          <div id="contact" style={{ padding: '80px 50px', backgroundColor: '#fff' }}>
            <Contact />
          </div>
        </Content>
      </Layout>
      <Footer />
    </Router>
  );
}

export default App;
