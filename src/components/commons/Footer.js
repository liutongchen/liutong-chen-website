import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div id="footer">
            <Col md={6}><a href="http://res.cloudinary.com/dla0ocfbw/image/upload/v1500512309/personalWebsite/Liutong_Chen_SDE.pdf" download="liutong_chen_resume">Download Resume</a></Col>
            <Col md={6}><Link to="/contact">Contact Me</Link></Col>
        </div>
    );
};

export default Footer;