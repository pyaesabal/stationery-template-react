import React from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { faSearch, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LoginModal from './part/modal/LoginModal';
import RegisterModal from './part/modal/RegisterModal';

const Header = () =>{
  const [showLogin,setShowLogin] = React.useState(false);
  const [showRegister,setShowRegister] = React.useState(false);
    return (
      <>
        <div className="header-top mt-3 desktop">
          <Container>
            <Row>
              <Col xs={2}><a href="/"><h3>Logo Here</h3></a></Col>
              <Col xs={6}>
                <InputGroup className="mb-3">
                  <FormControl placeholder="Type Here To Search" aria-label="Type Here To Search" aria-describedby="basic-addon2" />
                  <Button variant="outline-secondary" id="button-addon2"><FontAwesomeIcon icon={faSearch} /></Button>
                </InputGroup>
              </Col>
              <Col>
                <Row className="info">
                  <Col>
                    <Button variant="link" className="login-btn" onClick={() => setShowLogin(true)}>
                    Login
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="link" className="reg-btn" onClick={() => setShowRegister(true)}>
                    Register
                    </Button>
                  </Col>
                  <Col className="d-none d-xs-block "><FontAwesomeIcon icon={faCartPlus} />$0.0</Col>
                  <Col className="d-none d-xs-block "><FontAwesomeIcon icon={faCartPlus} />$0.0</Col>
                  <Col><FontAwesomeIcon icon={faCartPlus} />$0.0</Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <Navbar collapseOnSelect expand="lg">
            <Container>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" >Home</Nav.Link>
                        <Nav.Link as={Link} to="/brands">Brands</Nav.Link>
                        <Nav.Link as={Link} to="/allcategories">All Categories</Nav.Link>
                        <Nav.Link as={Link} to="/trackingorders">Tracking Order</Nav.Link>
                        <Nav.Link as={Link} to="/contactus">Contact Us</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        
                        
                      </Nav>
                      <Nav className="right-menu">
                        <Nav.Link href="#deets">Tel : +959407899911</Nav.Link>
                        <Nav.Link href="#deets">info@naychistationery.com</Nav.Link>
                        
                      </Nav>
                    </Navbar.Collapse>
            </Container>
          </Navbar>          
        </div>
        <LoginModal
          show={showLogin}
          onHide={() => setShowLogin(false)}
        />
        <RegisterModal
          show={showRegister}
          onHide={() => setShowRegister(false)}
        />
      </>
    );
  };

  export default Header