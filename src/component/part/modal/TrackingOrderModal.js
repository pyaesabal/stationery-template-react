import React from "react";
import Button from 'react-bootstrap/Button';
import { Form } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
function TrackingOrderModal(props) {
    return (
        <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Tracking Order
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>To track your order please enter your Order ID in the box below and press the "Track" button.This was given to you on your receipt and in the confirmation email you should have received.</p>
            <Form>
                <div className="form-field">
                    <Form.Group className="mb-3 tracking" controlId="formTracking">
                        <Form.Control type="text" placeholder="Enter Order Number" />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="btn-submit btn-track">
                    Track
                </Button>

                </div>
              
                
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
export default TrackingOrderModal