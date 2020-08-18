import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className='mt-5'>
      <Container fluid='true'>
        <Row className='border-top justify-content-between p-4'>
          <Col className='p-0' md={3} sm={12}>
            Martin Lapihuska
          </Col>
          <Col className='p-0 d-flex justify-content-end' md={4}>
            This web was made by Martin Lapihuska
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
