import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from "@fortawesome/free-solid-svg-icons";
function LoginModal(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Please login to your account.
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Login with <FontAwesomeIcon icon={faGift} className="fb-icon"/> <FontAwesomeIcon icon={faGift} className="google-icon"/></p>
            <p className="text-center or">-OR-</p>
        
            <Form>
                <div className="form-field">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember Me" />
                    </Form.Group>

                </div>
              
                <Button variant="primary" type="submit" className="btn-submit">
                    Submit
                </Button>
            </Form>
                
               
                {/* <Col>
                    <p className="text-center or-txt">--Or Login With--</p>
                    
                    <Button variant="primary" className="fb-btn">Facebook</Button>
                
                    <Button variant="primary" className="gmail-btn">Google</Button>
                </Col> */}
            
                
        </Modal.Body>
      </Modal>
    );

}
export default LoginModal;