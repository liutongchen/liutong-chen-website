import React from 'react';
import personalInfo from '../../../src/info';
import {Row, Col} from 'react-bootstrap';
import ProjectComponents from './projectComponents';
import ScrollToTopOnMount from '../commons/ScrollToTopOnMount';

class ProjectsPage extends React.Component {

    render() {
        
        return (
            <div>
                <ScrollToTopOnMount/>
                <Row id="projectIntro">
                    <img 
                        src="https://image.shutterstock.com/z/stock-vector-cartoon-girl-types-on-a-laptop-97727552.jpg" 
                        alt="Image" 
                        className="img-circle"
                        id="projectIntroImg"/>
                    <Col xs={8} xsOffset={2} sm={8} smOffset={2} mdOffset={4} md={4}>
                        <h2>What I've Done</h2>
                        <p>Here's some of the work I have done so far. To learn more about the projects I have done, please go to my <a href={personalInfo.basicInfo.github}>github</a>.</p>
                    </Col>
                </Row>
                <ProjectComponents projectsList={personalInfo.projects}/>
            </div>
        );
    }
}

export default ProjectsPage;