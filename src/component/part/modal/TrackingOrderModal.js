import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
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
            <InputGroup className="mb-3">
              <FormControl placeholder="Enter Order Number" aria-label="Order Number" aria-describedby="basic-addon2" />
              <Button variant="outline-secondary" id="button-addon2"> Track </Button>
            </InputGroup>
                
               
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