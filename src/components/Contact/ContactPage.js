import React from 'react';
import {Col, Row} from 'react-bootstrap';

const ContactPage = () => {
    return (
        <div>
            <h2 id="contactPageTitle">Let's get in touch!</h2>
            <Row id="contactIcon">
                <Col md={2} mdOffset={3}><img src="http://res.cloudinary.com/dla0ocfbw/image/upload/v1500355125/personalWebsite/email-icon.ico" alt="email"/></Col>
                <Col md={2}><img src="http://res.cloudinary.com/dla0ocfbw/image/upload/v1500355124/personalWebsite/linkedin-icon.png" alt="linkedin"/></Col>
                <Col md={2}><img src="http://res.cloudinary.com/dla0ocfbw/image/upload/v1500353959/personalWebsite/github-icon.png" alt="github"/></Col>
            </Row>
            <Row id="contactCategories">
                <Col md={2} mdOffset={3}>Email</Col>
                <Col md={2}>Linkedin</Col>
                <Col md={2}>Github</Col>
            </Row>
        </div>
    )
}

export default ContactPage;