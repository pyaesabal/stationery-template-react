import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
function RegisterModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Create an account
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>                
                <p className="text-center">Register with up using your email address</p>
                <Row>
                    <Col className="reg-field">                     
                        <Form.Group className="mb-3" controlId="formBasicFirstName">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control type="text" placeholder="First Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicLastName">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control type="text" placeholder="Last Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control type="text" placeholder="Phone Number" />
                        </Form.Group>                      
                    </Col>
                    <Col className="reg-field">
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" placeholder="Password" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Confirm Password</Form.Label>
                          <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                    </Col>                    
                </Row>
                <div className="reg-btn">
                  <Button variant="primary" type="submit">
                      Create Account
                  </Button>
                </div>
            </Form>
        </Modal.Body>
        
      </Modal>
    );

}
export default RegisterModal;