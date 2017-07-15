import React from 'react';
import personalInfo from '../../../src/info';
import {Row, Col} from 'react-bootstrap';

const ProjectsPage = () => {
    return (
        <div>
            <Row id="projectIntro">
                <img 
                    src="https://image.shutterstock.com/z/stock-vector-cartoon-girl-types-on-a-laptop-97727552.jpg" 
                    alt="Image" 
                    className="img-circle"
                    id="projectIntroImg"/>
                <Col mdOffset={4} md={4}>
                    <h2>What I've Done</h2>
                    <p>Here's some of the work I have done so far. To learn more about the projects I have done, please go to my <a href={personalInfo.basicInfo.github}>github</a>.</p>
                </Col>
            </Row>
        </div>
    );
};

export default ProjectsPage;