import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function AboutUs() {
  return (
    <Container className='content'>
      <Row>
        <Col>    
        <div>
          <h1>About Us</h1>
            <p>Welcome to our website!</p>
            <p>We are a passionate team dedicated to providing quality products/services.</p>
            <p>Our mission is to make a positive impact on people's lives through innovative solutions.</p>
          <h2>Our Team</h2>
            <ul>
              <li>Viviana Baute</li>
              <li>Sergio González</li>
              <li>Daliborka Vidic</li>
            </ul>
      </div>
      </Col>
      <Col>      
        <div>
          <h2>Our Values</h2>
              <ul>
                <li>Customer Satisfaction</li>
                <li>Integrity</li>
                <li>Innovation</li>
                <li>Collaboration</li>
                <li>Excellence</li>
              </ul>
          <h2>Contact Us</h2>
            <p>If you have any questions or inquiries, please feel free to reach out to us:</p>
            <p>Email: info@example.com</p>
            <p>Phone: 123-456-7890</p>
        </div>
      </Col>
      </Row>
    </Container>
  );
};
