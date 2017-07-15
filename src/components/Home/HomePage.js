import React from 'react';
import personalInfo from '../../../src/info'; 
import {Col, Row} from 'react-bootstrap';

const HomePage = () => {
    return (
        <div>
            <div id="homePageTitle">
                <h1>Hey, I'm Liutong.</h1>
                <p>A software developer</p>
            </div>
            <Row id="overview">
                <img id="homePageSelfie" src={personalInfo.basicInfo.selfie} alt="Liutong's Pic" className="img-circle"/>
                <Col mdOffset={4} md={4}>
                    <h2>Hi.</h2>
                    <p>{personalInfo.overview}</p>
                </Col>
            </Row>
        </div>
    );
};

export default HomePage;