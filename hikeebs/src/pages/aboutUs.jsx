import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export function AboutUs() {
  return (
    <Container className='content  ' fluid="md">
      <Row className='row pt-md-5 pt-sm-5'>
        <Col md={6} >    
        <div>
      <h2>About Us</h2>
        <p>Welcome to our website!</p>
        <p>We are a passionate team dedicated to providing quality keycaps made of resin.</p>
        <p>Our mission is to make a positive impact on people's lives through innovative solutions and personalized keycaps.</p>
      <h5>Our Values</h5>
      <p>We are committed to providing high-quality products through expert craftsmanship and durable materials.</p>
      <p>We are driven by creativity and constantly seek new ways to design unique resin keycaps. While prioritizing excelent customer service and strive to ensure our customers' satisfaction in every interaction and treateveryone with respect and fairness, maintaining high ethical standards in our business practices.</p>
      <p>We appreciate the trust you place in us when choosing our resin keycaps.</p>  
      </div>
      <h5>Our Team</h5>
      <ul style={{listStyleType: 'circle'}}>
        <li>Viviana Baute</li>
        <li>Sergio González</li>
        <li>Daliborka Vidic</li>
      </ul>
      </Col>
        <Col >      

        
      <h2>Contact Us</h2>
      <Form>
      <fieldset >
        <Form.Group className="mb-3">
          <Form.Control type="name" placeholder='Enter your name' className='mb-3'></Form.Control>
        <Form.Control type="email" placeholder="Enter email" className='mb-3' />
        <Form.Control
          as="textarea"
          placeholder="Enter your message..."
          style={{ height: '100px' }}
        />

        </Form.Group>
        

        <Button type="submit" className='submit'>Submit</Button>
      </fieldset>
    </Form>

    </Col>
      </Row>


      
    </Container>
  );
};

