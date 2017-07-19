import React from 'react';
import { Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <div id="footer">
            <Col md={6}><a href="#">Download Resume</a></Col>
            <Col md={6}><a href="#">Contact Me</a></Col>
        </div>
    );
};

export default Footer;