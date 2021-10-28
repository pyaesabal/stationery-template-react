import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import React from 'react';

const Footer = () =>{
    return(
      <>
      <div className="footer-block mt-5 pt-4 pb-4">
        <Container>
          <Row>
            <Col xs={4}>
              <h5>Contact Us</h5>
              <ListGroup>
                <ListGroup.Item>No. (328), Kyee Myin Dine Kannar Road, Kyee Myin Dine Township, Yangon</ListGroup.Item>
                <ListGroup.Item>+959407899911 , +959407899911 , +959407899911 , +959407899911 , +959407899911</ListGroup.Item>
                <ListGroup.Item>info@naychistationery.com</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <h5>FAQ</h5>
              <ListGroup>
                <ListGroup.Item>Shop </ListGroup.Item>
                <ListGroup.Item>Delivery Fee</ListGroup.Item>
                <ListGroup.Item>Shipping and Delivery</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <h5>Opening Hour</h5>
              <ListGroup>
                <ListGroup.Item>Mon-Fri 9AM-5PM </ListGroup.Item>
                <ListGroup.Item>Closed on saturday , sunday and public holiday.</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <h5>Payment Method</h5>
                  <Image src="https://naychistationery.com/wp-content/uploads/2020/12/payments-method.png" thumbnail />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="copyright pt-2 pb-2">
        <span>Copyright © 2021 Nay Chi Stationery. All rights reserved. Privacy Policy | Term of Use </span>
      </div>
      </>
    )
  }

  export default Footer