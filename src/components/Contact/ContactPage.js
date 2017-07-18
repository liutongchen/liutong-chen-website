import React from 'react';
import {Col, Row} from 'react-bootstrap';
import personalInfo from '../../../src/info';

const ContactPage = () => {
    return (
        <div>
            <h2 id="contactPageTitle">Let's get in touch!</h2>
            <Row id="contactIcon">
                <Col md={2} mdOffset={3}>
                    <a href={"mailto:"+personalInfo.basicInfo.email}>
                        <img src="http://res.cloudinary.com/dla0ocfbw/image/upload/v1500355125/personalWebsite/email-icon.ico" alt="email"/>
                    </a>
                </Col>
                <Col md={2}>
                    <a href={personalInfo.basicInfo.linkedin}>
                        <img src="http://res.cloudinary.com/dla0ocfbw/image/upload/v1500355124/personalWebsite/linkedin-icon.png" alt="linkedin"/>
                    </a>
                </Col>
                <Col md={2}>
                    <a href={personalInfo.basicInfo.github}>
                        <img src="http://res.cloudinary.com/dla0ocfbw/image/upload/v1500353959/personalWebsite/github-icon.png" alt="github"/>
                    </a>
                </Col>
            </Row>
        </div>
    )
}

export default ContactPage;