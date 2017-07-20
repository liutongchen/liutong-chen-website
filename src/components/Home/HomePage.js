import React from 'react';
import personalInfo from '../../../src/info'; 
import {Col, Row} from 'react-bootstrap';
import ScrollToTopOnMount from '../commons/ScrollToTopOnMount';

const HomePage = () => {
    return (
        <div>
            <ScrollToTopOnMount/>
            <div id="homePageTitle">
                <h1 style={{fontSize: "42px"}}>Hey, I'm Liutong.</h1>
                <p>A software developer</p>
            </div>
            <Row id="overview">
                <img id="homePageSelfie" src={personalInfo.basicInfo.selfie} alt="Liutong's Pic" className="img-circle"/>
                <Col xs={8} xsOffset={2} mdOffset={4} md={4}>
                    <h2>Hi.</h2>
                    <p>{personalInfo.overview}</p>
                </Col>
            </Row>
        </div>
    );
};

export default HomePage;