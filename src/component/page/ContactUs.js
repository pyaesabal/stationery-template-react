import React from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { faMapMarkerAlt,faPhoneAlt,faEnvelope,faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ContactUs = () =>{
    return(
        <div className="contact-page m-5">
                <Container>
                    <Row>
                        <Col>
                            <div className="mapouter">
                                <div className="gmap_canvas">
                                    <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Shwe%20Moe%20Kaung%20Condo&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                                </div>
                            </div>
                        </Col>
                        <Col className="contact-icons">
                            <p>You can buy everything inside. The Best E-commerce Website in Myanmar, naychistationery.com</p>
                            <p><FontAwesomeIcon icon={faMapMarkerAlt} />No. 328 Kyee Myin Dine Kannar Road, Kyee Myin Daing Township Yangon.</p>
                            <p><FontAwesomeIcon icon={faPhoneAlt} />09407899911 09407899922 09407899933 09407899944 09407899955 </p>     
                            <p><FontAwesomeIcon icon={faEnvelope} />sales@naychistationery.com </p>     
                            <p><FontAwesomeIcon icon={faEnvelope} />info@naychistationery.com</p>     
                            <h5>Opening Hour</h5>  <br/>   
                            <p><FontAwesomeIcon icon={faClock} />Mon - Fri / 9AM - 5PM</p>
                            <p>Closed saturday,sunday and public holiday.</p>
                        </Col>
                    </Row>        
                </Container>
        </div>
        
    )
}
export default ContactUs