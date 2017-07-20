import React from 'react';
import personalInfo from '../../../src/info';
import {Row, Col} from 'react-bootstrap';
import PassionComponents from './PassionComponents';
import ScrollToTopOnMount from '../commons/ScrollToTopOnMount';

const PassionPage = () => {
    return (
        <div>
            <ScrollToTopOnMount/>
            <Row id="passionIntro">
                <img src={personalInfo.passion.intro.img} alt="earth pic"/>
                <h2>{personalInfo.passion.intro.motto}</h2>
                <Col mdOffset={4} md={4}>{personalInfo.passion.intro.description}</Col>
            </Row>

            <PassionComponents passionList={personalInfo.passion.items}/>
        </div>
    );
};

export default PassionPage;