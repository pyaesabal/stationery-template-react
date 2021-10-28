import React from 'react';
import { Image } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
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
export default Brands;