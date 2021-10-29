import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
const About = () =>{
    return(
        <Container>
        
        <h4 className="block-title">About Us</h4>
        <Row>
            <Col>
                <p>Nay Chi stationery has started in Moulmein Market in 1984 and moved to Yangon in 2004 and has now been standing with good reputation. Nay Chi Stationery is a retail and wholesaler of a wide range of stationery and is one of the top five stationery best sellers in Myanmar.</p>
                <p>Nay Chi Stationery distributes various brands not only in Myanmar but also from abroad. Nay Chi has set up a number of stationery stores and has consulted with our colleagues in stationery industry. According to the needs and living standards, various brands of stationery in Myanmar are now being imported and sold in www.naychistationery.com as e-commerce. Stationery Showroom on Kyeemyindaing Kanner Road; Headquartered in Yankin and our warehouse in Mingalardon.</p>
                <p>Our ultimate aim is to serve the customer with the best services and is affiliated with more than 100 brands. We www.naychistationery.com was created with the idea of uniting business partners in the stationery field to provide effective support in areas of need for education. It also aims to make technology easily accessible to all classes of people and to share ideas with each other.</p>
            </Col>
            <Col>
                <Image src="https://naychistationery.com/wp-content/uploads/2021/06/1-321.jpg" thumbnail />
            </Col>
        </Row>
        </Container>
    )
}
export default About