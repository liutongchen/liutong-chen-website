import React from 'react';
import { Col, Row, Tooltip, OverlayTrigger } from 'react-bootstrap';
import personalInfo from '../../../src/info';
import ScrollToTopOnMount from '../commons/ScrollToTopOnMount';

const ContactPage = () => {
    const gmailTooltip = (
        <Tooltip id="tooltip">Gmail</Tooltip>
    );
    const linkedinTooltip = (
        <Tooltip id="tooltip">Linkedin</Tooltip>
    );
    const githubTooltip = (
        <Tooltip id="tooltip">Github</Tooltip>
    );
    return (
        <div>
            <ScrollToTopOnMount />
            <h2 id="contactPageTitle">Let's get in touch!</h2>
            <Row id="contactIcon">

                <Col xs={4} sm={2} smOffset={3} md={2} mdOffset={3}>
                    <OverlayTrigger placement="bottom" overlay={gmailTooltip}>
                        <a href={"mailto:" + personalInfo.basicInfo.email}>
                            <img src="http://res.cloudinary.com/dla0ocfbw/image/upload/v1500355125/personalWebsite/email-icon.ico" alt="email" />
                        </a>
                    </OverlayTrigger>
                </Col>

                <Col xs={4} sm={2} md={2}>
                    <OverlayTrigger placement="bottom" overlay={linkedinTooltip}>
                        <a href={personalInfo.basicInfo.linkedin}>
                            <img src="http://res.cloudinary.com/dla0ocfbw/image/upload/v1500355124/personalWebsite/linkedin-icon.png" alt="linkedin" />
                        </a>
                    </OverlayTrigger>
                </Col>

                <Col xs={4} sm={2} md={2}>
                    <OverlayTrigger placement="bottom" overlay={githubTooltip}>
                        <a href={personalInfo.basicInfo.github}>
                            <img src="http://res.cloudinary.com/dla0ocfbw/image/upload/v1500353959/personalWebsite/github-icon.png" alt="github" />
                        </a>
                    </OverlayTrigger>
                </Col>
            </Row>
        </div>
    );
};

export default ContactPage;