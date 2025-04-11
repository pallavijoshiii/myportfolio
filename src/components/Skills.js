import React from 'react';
import { Row, Col, Progress, Typography } from 'antd';

const { Title } = Typography;

function Skills() {
  return (
    <div style={{color: '#f4f4f4' }}>
      <Title level={2} style={{  color: "#09577e", fontFamily: "'Montserrat', sans-serif",}}>Skills</Title>
      <Row gutter={16}>
        <Col span={12} style={{marginBottom:'20px'}}>
          <Title level={4} style={{ color: '#141515',fontFamily: "'Poppins', sans-serif",}}>JavaScript</Title>
          <Progress percent={40} strokeColor="#1abc9c" />
        </Col>
        <Col span={12}>
          <Title level={4} style={{color: '#141515',fontFamily: "'Poppins', sans-serif",}}>React</Title>
          <Progress percent={50} strokeColor="#A1C6EA" />
        </Col>
        <Col span={12}>
          <Title level={4} style={{ color: '#141515',fontFamily: "'Poppins', sans-serif", }}>Node.js</Title>
          <Progress percent={55} strokeColor="#FF5722" />
        </Col>
        <Col span={12}>
          <Title level={4} style={{ color: '#141515',fontFamily: "'Poppins', sans-serif", }}>CSS</Title>
          <Progress percent={60} strokeColor="#F1C40F" />
        </Col>
      </Row>
    </div>
  );
}

export default Skills;

// import React from 'react';
// import { Row, Col, Progress, Typography } from 'antd';

// const { Title } = Typography;

// function Skills() {
//   return (
//     <div style={{ color: '#f4f4f4', padding: '20px' }}>
//       <Title 
//         level={2} 
//         style={{ color: "#09577e", fontFamily: "'Montserrat', sans-serif", marginBottom: '30px' }}
//       >
//         Skills
//       </Title>
//       <Row gutter={[24, 24]}>
//         <Col span={12} style={{ marginBottom: '20px' }}>
//           <Title 
//             level={4} 
//             style={{ color: '#141515', fontFamily: "'Poppins', sans-serif" }}
//           >
//             JavaScript
//           </Title>
//           <Progress 
//             percent={65} 
//             strokeColor="linear-gradient(to right, #f39c12, #e67e22)" 
//             strokeWidth={15} 
//             style={{ borderRadius: '10px' }} 
//           />
//         </Col>
//         <Col span={12}>
//           <Title 
//             level={4} 
//             style={{ color: '#141515', fontFamily: "'Poppins', sans-serif" }}
//           >
//             React
//           </Title>
//           <Progress 
//             percent={75} 
//             strokeColor="linear-gradient(to right, #1abc9c, #16a085)" 
//             strokeWidth={15} 
//             style={{ borderRadius: '10px' }} 
//           />
//         </Col>
//         <Col span={12}>
//           <Title 
//             level={4} 
//             style={{ color: '#141515', fontFamily: "'Poppins', sans-serif" }}
//           >
//             Node.js
//           </Title>
//           <Progress 
//             percent={80} 
//             strokeColor="linear-gradient(to right, #FF5722, #FF7043)" 
//             strokeWidth={15} 
//             style={{ borderRadius: '10px' }} 
//           />
//         </Col>
//         <Col span={12}>
//           <Title 
//             level={4} 
//             style={{ color: '#141515', fontFamily: "'Poppins', sans-serif" }}
//           >
//             CSS
//           </Title>
//           <Progress 
//             percent={75} 
//             strokeColor="linear-gradient(to right, #F1C40F, #F39C12)" 
//             strokeWidth={15} 
//             style={{ borderRadius: '10px' }} 
//           />
//         </Col>
//       </Row>
//     </div>
//   );
// }

// export default Skills;
