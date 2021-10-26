import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

import './App.css';

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <Toast show={show} onClose={() => toggleShow(!show)}>
      <Toast.Header>
        <strong className="mr-auto">React-Bootstrap</strong>
      </Toast.Header>
      <Toast.Body>{children}</Toast.Body>
    </Toast>
  );
};

const App = () => (
  <Container className="p-3">
    <Row>
      <Col><h3>Logo Here</h3></Col>
      <Col xs={6}>
        <InputGroup className="mb-3">
          <FormControl placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
          <Button variant="outline-secondary" id="button-addon2">Button</Button>
        </InputGroup>
      </Col>
      <Col>
        <Row>
          <Col>login</Col>
          <Col>Register</Col>
          <Col>$0.0</Col>
        </Row>
      </Col>
    </Row>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className="right-menu">
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    <Row className="mt-4 banner">
      <Col className="pr-0">
        <ListGroup>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>         
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>         
        </ListGroup>
      </Col>
      <Col xs={9} className="pl-0 pr-0">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src="https://naychistationery.com/wp-content/uploads/2020/12/Untitled-1-8-909x350.jpg" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="https://naychistationery.com/wp-content/uploads/2020/12/deli-banner-1299x500.png" alt="Second slide" />
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
    <Row className="brands"><h4>Brands</h4></Row>
    <Row>
      <Col xs={6} md={2} className ="pr-0 pl-0">
        <Image src="https://naychistationery.com/wp-content/uploads/2020/12/Deli.jpg" thumbnail />
      </Col>
      <Col xs={6} md={2} className ="pr-0 pl-0">
        <Image src="https://naychistationery.com/wp-content/uploads/2020/12/Deli.jpg" thumbnail />
      </Col>
      <Col xs={6} md={2} className ="pr-0 pl-0">
        <Image src="https://naychistationery.com/wp-content/uploads/2020/12/Deli.jpg" thumbnail />
      </Col>
      <Col xs={6} md={2} className ="pr-0 pl-0">
        <Image src="https://naychistationery.com/wp-content/uploads/2020/12/Deli.jpg" thumbnail />
      </Col>
      <Col xs={6} md={2} className ="pr-0 pl-0"> 
        <Image src="https://naychistationery.com/wp-content/uploads/2020/12/Deli.jpg" thumbnail />
      </Col>
      <Col xs={6} md={2} className ="pr-0 pl-0">
        <Image src="https://naychistationery.com/wp-content/uploads/2020/12/Deli.jpg" thumbnail />
      </Col>
      <Col xs={6} md={2} className ="pr-0 pl-0">
        <Image src="https://naychistationery.com/wp-content/uploads/2020/12/Deli.jpg" thumbnail />
      </Col>
      <Col xs={6} md={2} className ="pr-0 pl-0">
        <Image src="https://naychistationery.com/wp-content/uploads/2020/12/Deli.jpg" thumbnail />
      </Col>
      <Col xs={6} md={2} className ="pr-0 pl-0">
        <Image src="https://naychistationery.com/wp-content/uploads/2020/12/Deli.jpg" thumbnail />
      </Col>
      <Col xs={6} md={2} className ="pr-0 pl-0">
        <Image src="https://naychistationery.com/wp-content/uploads/2020/12/Deli.jpg" thumbnail />
      </Col>
      <Col xs={6} md={2} className ="pr-0 pl-0">
        <Image src="https://naychistationery.com/wp-content/uploads/2020/12/Deli.jpg" thumbnail />
      </Col>
      <Col xs={6} md={2} className ="pr-0 pl-0">
        <Image src="https://naychistationery.com/wp-content/uploads/2020/12/Deli.jpg" thumbnail />
      </Col>
    </Row>
    <Row className="discount"><h4>Discount Products</h4></Row>
    <Row>
      <Col xs={6} md={3}>
        <Card>
          <Card.Img variant="top" src="https://naychistationery.com/wp-content/uploads/2021/06/EB-Super-2-scaled-1-300x300.jpg" />
          <Card.Body>
            <Card.Title>EU Ubrand Excellent</Card.Title>
            <Card.Text>
              <span>$12.6</span>
            </Card.Text>
            <Button variant="danger">Add To Card</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={6} md={3}>
        <Card>
          <Card.Img variant="top" src="https://naychistationery.com/wp-content/uploads/2021/06/EB-Super-2-scaled-1-300x300.jpg" />
          <Card.Body>
            <Card.Title>EU Ubrand Excellent</Card.Title>
            <Card.Text>
              <span>$12.6</span>
            </Card.Text>
            <Button variant="danger">Add To Card</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={6} md={3}>
        <Card>
          <Card.Img variant="top" src="https://naychistationery.com/wp-content/uploads/2021/06/EB-Super-2-scaled-1-300x300.jpg" />
          <Card.Body>
            <Card.Title>EU Ubrand Excellent</Card.Title>
            <Card.Text>
              <span>$12.6</span>
            </Card.Text>
            <Button variant="danger">Add To Card</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={6} md={3}>
        <Card>
          <Card.Img variant="top" src="https://naychistationery.com/wp-content/uploads/2021/06/EB-Super-2-scaled-1-300x300.jpg" />
          <Card.Body>
            <Card.Title>EU Ubrand Excellent</Card.Title>
            <Card.Text>
              <span>$12.6</span>
            </Card.Text>
            <Button variant="danger">Add To Card</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={6} md={3}>
        <Card>
          <Card.Img variant="top" src="https://naychistationery.com/wp-content/uploads/2021/06/EB-Super-2-scaled-1-300x300.jpg" />
          <Card.Body>
            <Card.Title>EU Ubrand Excellent</Card.Title>
            <Card.Text>
              <span>$12.6</span>
            </Card.Text>
            <Button variant="danger">Add To Card</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default App;