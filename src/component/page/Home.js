import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift, faEye } from '@fortawesome/free-solid-svg-icons';
import DropdownButton from 'react-bootstrap/DropdownButton';
import  ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
// import Header from '../Header';
// import Footer from '../Footer';


const Banner = () =>{
  return (
    <>
      <Container>
        <Row className="mt-4 banner">
          <Col className="p-0">
            <ListGroup>
              <ListGroup.Item>
                <FontAwesomeIcon icon={faGift} />
                    <span className="ml-5">Cras justo odio</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <FontAwesomeIcon icon={faGift} />
                    <span className="ml-5">Cras justo odio</span>
              </ListGroup.Item>
              <ListGroup.Item>                
                <FontAwesomeIcon icon={faGift} />
                    <DropdownButton
                    as={ButtonGroup}
                    id={`dropdown-button-drop-right`}
                    drop="right"
                    variant="secondary"
                    title={`Drop Right`}
                    >                      
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>                 
              </ListGroup.Item>
              <ListGroup.Item>                
                <FontAwesomeIcon icon={faGift} />
                    <DropdownButton
                    as={ButtonGroup}
                    id={`dropdown-button-drop-right`}
                    drop="right"
                    variant="secondary"
                    title={`Drop Right`}
                    >                      
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>                 
              </ListGroup.Item>
              <ListGroup.Item>                
                <FontAwesomeIcon icon={faGift} />
                    <DropdownButton
                    as={ButtonGroup}
                    id={`dropdown-button-drop-right`}
                    drop="right"
                    variant="secondary"
                    title={`Drop Right`}
                    >                      
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>                 
              </ListGroup.Item>
              <ListGroup.Item>                
                <FontAwesomeIcon icon={faGift} />
                    <DropdownButton
                    as={ButtonGroup}
                    id={`dropdown-button-drop-right`}
                    drop="right"
                    variant="secondary"
                    title={`Drop Right`}
                    >                      
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>                 
              </ListGroup.Item>
              <ListGroup.Item>                
                <FontAwesomeIcon icon={faGift} />
                    <DropdownButton
                    as={ButtonGroup}
                    id={`dropdown-button-drop-right`}
                    drop="right"
                    variant="secondary"
                    title={`Drop Right`}
                    >                      
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>                 
              </ListGroup.Item>
              <ListGroup.Item>                
                <FontAwesomeIcon icon={faGift} />
                    <DropdownButton
                    as={ButtonGroup}
                    id={`dropdown-button-drop-right`}
                    drop="right"
                    variant="secondary"
                    title={`Drop Right`}
                    >                      
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>                 
              </ListGroup.Item>
              <ListGroup.Item>                
                <FontAwesomeIcon icon={faGift} />
                    <DropdownButton
                    as={ButtonGroup}
                    id={`dropdown-button-drop-right`}
                    drop="right"
                    variant="secondary"
                    title={`Drop Right`}
                    >                      
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>                 
              </ListGroup.Item>
                                   
            </ListGroup>
          </Col>
          <Col xs={9} className="p-0">
            <Carousel fade>
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
              <div className="block-title d-flex">
                  <Col xs={10}>
                      <h4>Discount Products</h4>
                  </Col>
                  <Col className="view-all">
                      <a href=""><FontAwesomeIcon icon={faEye} /> View All</a>
                  </Col>
              </div>
              
            
              <div className="products">
                <Card>
                  <Card.Img variant="top" src="https://naychistationery.com/wp-content/uploads/2021/06/EB-Super-2-scaled-1-300x300.jpg" />
                  <span className="sale-item">SALE</span>
                  <Card.Body>
                    <Card.Title>EU Ubrand Excellent</Card.Title>
                    <Card.Text>
                      <div className="sale-price">
                          <div>
                            <span className="price">$4.00</span>
                            <span className="dashed-price">$4.33</span>
                          </div>
                          <span className="discount-price">8%</span>
                      </div>
                    </Card.Text>
                    <Button>Add To Card</Button>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src="https://naychistationery.com/wp-content/uploads/2021/06/EB-Super-2-scaled-1-300x300.jpg" />
                  <span className="sale-item">SALE</span>
                  <Card.Body>
                    <Card.Title>EU Ubrand Excellent</Card.Title>
                    <Card.Text>
                      <div className="sale-price">
                            <div>
                              <span className="price">$4.00</span>
                              <span className="dashed-price">$4.33</span>
                            </div>
                            <span className="discount-price">8%</span>
                        </div>
                    </Card.Text>
                    <Button>Add To Card</Button>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src="https://naychistationery.com/wp-content/uploads/2021/06/EB-Super-2-scaled-1-300x300.jpg" />
                  <span className="sale-item">SALE</span>
                  <Card.Body>
                    <Card.Title>EU Ubrand Excellent</Card.Title>
                    <Card.Text>
                      <div className="sale-price">
                          <div>
                            <span className="price">$4.00</span>
                            <span className="dashed-price">$4.33</span>
                          </div>
                          <span className="discount-price">8%</span>
                      </div>
                    </Card.Text>
                    <Button>Add To Card</Button>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src="https://naychistationery.com/wp-content/uploads/2021/06/EB-Super-2-scaled-1-300x300.jpg" />
                  <span className="sale-item">SALE</span>
                  <Card.Body>
                    <Card.Title>EU Ubrand Excellent</Card.Title>
                    <Card.Text>
                      <div className="sale-price">
                          <div>
                            <span className="price">$4.00</span>
                            <span className="dashed-price">$4.33</span>
                          </div>
                          <span className="discount-price">8%</span>
                      </div>
                    </Card.Text>
                    <Button>Add To Card</Button>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src="https://naychistationery.com/wp-content/uploads/2021/06/EB-Super-2-scaled-1-300x300.jpg" />
                  <span className="sale-item">SALE</span>
                  <Card.Body>
                    <Card.Title>EU Ubrand Excellent</Card.Title>
                    <Card.Text>
                      <div className="sale-price">
                          <div>
                            <span className="price">$4.00</span>
                            <span className="dashed-price">$4.33</span>
                          </div>
                          <span className="discount-price">8%</span>
                      </div>
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
            <div className="block-title d-flex">
                  <Col xs={10}>
                      <h4>New Arrival Products</h4>
                  </Col>
                  <Col className="view-all">
                      <a href=""><FontAwesomeIcon icon={faEye} /> View All</a>
                  </Col>
              </div>
              <div className="products">
                <Card>
                  <Card.Img variant="top" src="https://naychistationery.com/wp-content/uploads/2021/06/EB-Super-2-scaled-1-300x300.jpg" />
                  <Card.Body>
                    <Card.Title>EU Ubrand Excellent</Card.Title>
                    <Card.Text>
                      <span className="price">$12.6</span>
                    </Card.Text>
                    <Button>Add To Card</Button>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src="https://naychistationery.com/wp-content/uploads/2021/06/EB-Super-2-scaled-1-300x300.jpg" />
                  <Card.Body>
                    <Card.Title>EU Ubrand Excellent</Card.Title>
                    <Card.Text>
                      <span className="price">$12.6</span>
                    </Card.Text>
                    <Button>Add To Card</Button>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src="https://naychistationery.com/wp-content/uploads/2021/06/EB-Super-2-scaled-1-300x300.jpg" />
                  <Card.Body>
                    <Card.Title>EU Ubrand Excellent</Card.Title>
                    <Card.Text>
                      <span className="price">$12.6</span>
                    </Card.Text>
                    <Button>Add To Card</Button>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src="https://naychistationery.com/wp-content/uploads/2021/06/EB-Super-2-scaled-1-300x300.jpg" />
                  <Card.Body>
                    <Card.Title>EU Ubrand Excellent</Card.Title>
                    <Card.Text>
                      <span className="price">$12.6</span>
                    </Card.Text>
                    <Button>Add To Card</Button>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src="https://naychistationery.com/wp-content/uploads/2021/06/EB-Super-2-scaled-1-300x300.jpg" />
                  <Card.Body>
                    <Card.Title>EU Ubrand Excellent</Card.Title>
                    <Card.Text>
                      <span className="price">$12.6</span>
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
            <div className="block-title d-flex">
                  <Col xs={10}>
                      <h4>Best Selling Products</h4>
                  </Col>
                  <Col className="view-all">
                      <a href=""><FontAwesomeIcon icon={faEye} /> View All</a>
                  </Col>
              </div>
            <div className="products">
              <Card>
                <Card.Img variant="top" src="https://naychistationery.com/wp-content/uploads/2021/06/EB-Super-2-scaled-1-300x300.jpg" />
                <Card.Body>
                  <Card.Title>EU Ubrand Excellent</Card.Title>
                  <Card.Text>
                    <span className="price">$12.6</span>
                  </Card.Text>
                  <Button>Add To Card</Button>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="https://naychistationery.com/wp-content/uploads/2021/06/EB-Super-2-scaled-1-300x300.jpg" />
                <Card.Body>
                  <Card.Title>EU Ubrand Excellent</Card.Title>
                  <Card.Text>
                    <span className="price">$12.6</span>
                  </Card.Text>
                  <Button>Add To Card</Button>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="https://naychistationery.com/wp-content/uploads/2021/06/EB-Super-2-scaled-1-300x300.jpg" />
                <Card.Body>
                  <Card.Title>EU Ubrand Excellent</Card.Title>
                  <Card.Text>
                    <span className="price">$12.6</span>
                  </Card.Text>
                  <Button>Add To Card</Button>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="https://naychistationery.com/wp-content/uploads/2021/06/EB-Super-2-scaled-1-300x300.jpg" />
                <Card.Body>
                  <Card.Title>EU Ubrand Excellent</Card.Title>
                  <Card.Text>
                    <span className="price">$12.6</span>
                  </Card.Text>
                  <Button>Add To Card</Button>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="https://naychistationery.com/wp-content/uploads/2021/06/EB-Super-2-scaled-1-300x300.jpg" />
                <Card.Body>
                  <Card.Title>EU Ubrand Excellent</Card.Title>
                  <Card.Text>
                    <span className="price">$12.6</span>
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

const LatestProductCategories = () =>{
  return (
    <div className="block-categories mt-5 pt-5 pb-5">
      <Container>
        <h3 className="cat-title mb-5">Latest Products Categories</h3>
          <Row className="categories">
            <div className="cat-list">
              <img alt="" src="https://naychistationery.com/wp-content/uploads/2021/07/clip-board.png" />
                <h5 className="mt-3 mb-3">Card Title</h5>
                <p>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </p>
                <Button variant="outline-primary">View More</Button>{' '}
            </div>
            <div className="cat-list">
              <img alt="" src="https://naychistationery.com/wp-content/uploads/2021/07/clip-board.png" />
                <h5 className="mt-3 mb-3">Card Title</h5>
                <p>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </p>
                <Button variant="outline-primary">View More</Button>{' '}
            </div>
            <div className="cat-list">
              <img alt="" src="https://naychistationery.com/wp-content/uploads/2021/07/clip-board.png" />
                <h5 className="mt-3 mb-3">Card Title</h5>
                <p>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </p>
                <Button variant="outline-primary">View More</Button>{' '}
            </div>
            <div className="cat-list">
              <img alt="" src="https://naychistationery.com/wp-content/uploads/2021/07/clip-board.png" />
                <h5 className="mt-3 mb-3">Card Title</h5>
                <p>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </p>
                <Button variant="outline-primary">View More</Button>{' '}
            </div>
            <div className="cat-list">
              <img alt="" src="https://naychistationery.com/wp-content/uploads/2021/07/clip-board.png" />
                <h5 className="mt-3 mb-3">Card Title</h5>
                <p>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </p>
                <Button variant="outline-primary">View More</Button>{' '}
            </div>
            <div className="cat-list">
              <img alt="" src="https://naychistationery.com/wp-content/uploads/2021/07/clip-board.png" />
                <h5 className="mt-3 mb-3">Card Title</h5>
                <p>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </p>
                <Button variant="outline-primary">View More</Button>{' '}
            </div>
          </Row>
      </Container>
    </div>
  )
}


const Home = () => (
  <>
  

        <Banner/>
        <Brands/>
        <DiscountProducts/>
        <NewArrivalProducts/>
        <BestSellingProducts/>
        <LatestProductCategories/>
    
  </>
  
);

export default Home;