import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import personalInfo from '../../../src/info';

const Footer = () => {
    return (
        <div id="footer">
            <Col md={6}><a href={personalInfo.basicInfo.resume} download="liutong_chen_resume">Download Resume</a></Col>
            <Col md={6}><Link to="/contact">Contact Me</Link></Col>
        </div>
    );
};

export default Footer;