import React from 'react';
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
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCoffee,faSearch, faCartPlus } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
const Header = () =>{
  return (
      <div className="header-top mt-3">
        <Container>
          <Row>
            <Col><h3>Logo Here</h3></Col>
            <Col xs={6}>
              <InputGroup className="mb-3">
                <FormControl placeholder="Type Here To Search" aria-label="Type Here To Search" aria-describedby="basic-addon2" />
                <Button variant="outline-secondary" id="button-addon2"><FontAwesomeIcon icon={faSearch} /></Button>
              </InputGroup>
            </Col>
            <Col>
              <Row className="info">
                <Col>Login</Col>
                <Col>Register</Col>
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
      </div>
  );
};

const Banner = () =>{
  return (
    <>
      <Container>
        <Row className="mt-4 banner">
          <Col className="p-0">
            <ListGroup>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>         
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>         
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>         
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>         
            </ListGroup>
          </Col>
          <Col xs={9} className="p-0">
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
      </Container>
    </>
  )
}

const Brands = () =>{
  return (
    <>
      <Container>
          <Row>
            <h4 className="block-title">Brands</h4>
            <div className="brands">
              <Image src="https://naychistationery.com/wp-content/uploads/2020/12/Deli.jpg" thumbnail />
              <Image src="https://naychistationery.com/wp-content/uploads/2020/12/Deli.jpg" thumbnail />
              <Image src="https://naychistationery.com/wp-content/uploads/2020/12/Deli.jpg" thumbnail />
              <Image src="https://naychistationery.com/wp-content/uploads/2020/12/Deli.jpg" thumbnail />
              <Image src="https://naychistationery.com/wp-content/uploads/2020/12/Deli.jpg" thumbnail />
              <Image src="https://naychistationery.com/wp-content/uploads/2020/12/Deli.jpg" thumbnail />
            </div>
            <div className="brands">
              <Image src="https://naychistationery.com/wp-content/uploads/2020/12/Deli.jpg" thumbnail />
              <Image src="https://naychistationery.com/wp-content/uploads/2020/12/Deli.jpg" thumbnail />
              <Image src="https://naychistationery.com/wp-content/uploads/2020/12/Deli.jpg" thumbnail />
              <Image src="https://naychistationery.com/wp-content/uploads/2020/12/Deli.jpg" thumbnail />
              <Image src="https://naychistationery.com/wp-content/uploads/2020/12/Deli.jpg" thumbnail />
              <Image src="https://naychistationery.com/wp-content/uploads/2020/12/Deli.jpg" thumbnail />
            </div>
          </Row>
      </Container>
      
    </>
  )
}

const DiscountProducts = () =>{
  return (
    <>
      <Container>
            <Row>
            <h4 className="block-title">Discount Products</h4>
              <div className="products">
                <Card>
                  <Card.Img variant="top" src="https://naychistationery.com/wp-content/uploads/2021/06/EB-Super-2-scaled-1-300x300.jpg" />
                  <Card.Body>
                    <Card.Title>EU Ubrand Excellent</Card.Title>
                    <Card.Text>
                      <span>$12.6</span>
                    </Card.Text>
                    <Button>Add To Card</Button>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src="https://naychistationery.com/wp-content/uploads/2021/06/EB-Super-2-scaled-1-300x300.jpg" />
                  <Card.Body>
                    <Card.Title>EU Ubrand Excellent</Card.Title>
                    <Card.Text>
                      <span>$12.6</span>
                    </Card.Text>
                    <Button>Add To Card</Button>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src="https://naychistationery.com/wp-content/uploads/2021/06/EB-Super-2-scaled-1-300x300.jpg" />
                  <Card.Body>
                    <Card.Title>EU Ubrand Excellent</Card.Title>
                    <Card.Text>
                      <span>$12.6</span>
                    </Card.Text>
                    <Button>Add To Card</Button>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src="https://naychistationery.com/wp-content/uploads/2021/06/EB-Super-2-scaled-1-300x300.jpg" />
                  <Card.Body>
                    <Card.Title>EU Ubrand Excellent</Card.Title>
                    <Card.Text>
                      <span>$12.6</span>
                    </Card.Text>
                    <Button>Add To Card</Button>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src="https://naychistationery.com/wp-content/uploads/2021/06/EB-Super-2-scaled-1-300x300.jpg" />
                  <Card.Body>
                    <Card.Title>EU Ubrand Excellent</Card.Title>
                    <Card.Text>
                      <span>$12.6</span>
                    </Card.Text>
                    <Button>Add To Card</Button>
                  </Card.Body>
                </Card>
              </div>
          </Row>
      </Container>
    </>
    
  )
}

const NewArrivalProducts = () =>{
  return (
    <>
      <Container>
            <Row>
            <h4 className="block-title">New Arrival Products</h4>
              <div className="products">
                <Card>
                  <Card.Img variant="top" src="https://naychistationery.com/wp-content/uploads/2021/06/EB-Super-2-scaled-1-300x300.jpg" />
                  <Card.Body>
                    <Card.Title>EU Ubrand Excellent</Card.Title>
                    <Card.Text>
                      <span>$12.6</span>
                    </Card.Text>
                    <Button>Add To Card</Button>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src="https://naychistationery.com/wp-content/uploads/2021/06/EB-Super-2-scaled-1-300x300.jpg" />
                  <Card.Body>
                    <Card.Title>EU Ubrand Excellent</Card.Title>
                    <Card.Text>
                      <span>$12.6</span>
                    </Card.Text>
                    <Button>Add To Card</Button>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src="https://naychistationery.com/wp-content/uploads/2021/06/EB-Super-2-scaled-1-300x300.jpg" />
                  <Card.Body>
                    <Card.Title>EU Ubrand Excellent</Card.Title>
                    <Card.Text>
                      <span>$12.6</span>
                    </Card.Text>
                    <Button>Add To Card</Button>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src="https://naychistationery.com/wp-content/uploads/2021/06/EB-Super-2-scaled-1-300x300.jpg" />
                  <Card.Body>
                    <Card.Title>EU Ubrand Excellent</Card.Title>
                    <Card.Text>
                      <span>$12.6</span>
                    </Card.Text>
                    <Button>Add To Card</Button>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src="https://naychistationery.com/wp-content/uploads/2021/06/EB-Super-2-scaled-1-300x300.jpg" />
                  <Card.Body>
                    <Card.Title>EU Ubrand Excellent</Card.Title>
                    <Card.Text>
                      <span>$12.6</span>
                    </Card.Text>
                    <Button>Add To Card</Button>
                  </Card.Body>
                </Card>
              </div>
            </Row>
      </Container>
    </>
  )
}

const BestSellingProducts = () =>{
  return (
    <>
      <Container>
            <Row>
          <h4 className="block-title">Best Selling Products</h4>
            <div className="products">
              <Card>
                <Card.Img variant="top" src="https://naychistationery.com/wp-content/uploads/2021/06/EB-Super-2-scaled-1-300x300.jpg" />
                <Card.Body>
                  <Card.Title>EU Ubrand Excellent</Card.Title>
                  <Card.Text>
                    <span>$12.6</span>
                  </Card.Text>
                  <Button>Add To Card</Button>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="https://naychistationery.com/wp-content/uploads/2021/06/EB-Super-2-scaled-1-300x300.jpg" />
                <Card.Body>
                  <Card.Title>EU Ubrand Excellent</Card.Title>
                  <Card.Text>
                    <span>$12.6</span>
                  </Card.Text>
                  <Button>Add To Card</Button>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="https://naychistationery.com/wp-content/uploads/2021/06/EB-Super-2-scaled-1-300x300.jpg" />
                <Card.Body>
                  <Card.Title>EU Ubrand Excellent</Card.Title>
                  <Card.Text>
                    <span>$12.6</span>
                  </Card.Text>
                  <Button>Add To Card</Button>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="https://naychistationery.com/wp-content/uploads/2021/06/EB-Super-2-scaled-1-300x300.jpg" />
                <Card.Body>
                  <Card.Title>EU Ubrand Excellent</Card.Title>
                  <Card.Text>
                    <span>$12.6</span>
                  </Card.Text>
                  <Button>Add To Card</Button>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="https://naychistationery.com/wp-content/uploads/2021/06/EB-Super-2-scaled-1-300x300.jpg" />
                <Card.Body>
                  <Card.Title>EU Ubrand Excellent</Card.Title>
                  <Card.Text>
                    <span>$12.6</span>
                  </Card.Text>
                  <Button>Add To Card</Button>
                </Card.Body>
              </Card>
            </div>
            </Row>
      </Container>
    </>
  )
}

const Categories = () =>{
  return (
    <div className="block-categories">
      <Container>
          <Row className="categories">
            <Card>
              <Card.Img variant="top" src="https://naychistationery.com/wp-content/uploads/2021/07/clip-board.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img variant="top" src="https://naychistationery.com/wp-content/uploads/2021/07/clip-board.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img variant="top" src="https://naychistationery.com/wp-content/uploads/2021/07/clip-board.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img variant="top" src="https://naychistationery.com/wp-content/uploads/2021/07/clip-board.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img variant="top" src="https://naychistationery.com/wp-content/uploads/2021/07/clip-board.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img variant="top" src="https://naychistationery.com/wp-content/uploads/2021/07/clip-board.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Row>
      </Container>
    </div>
  )
}

const App = () => (
  <>
  
    <Header/>
    <Banner/>
    <Brands/>
    <DiscountProducts/>
    <NewArrivalProducts/>
    <BestSellingProducts/>
    <Categories/>
  
  </>
  
);

export default App;