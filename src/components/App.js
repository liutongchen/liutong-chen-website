import React from 'react';
import PropTypes from 'prop-types';
import {Navbar, Nav, NavItem, Col} from 'react-bootstrap';
import personalInfo from '../info';
import {IndexLinkContainer, LinkContainer} from 'react-router-bootstrap';

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                    <Navbar.Brand>
                       <img id="navbarSelfie" className="img-circle" src={personalInfo.basicInfo.selfie}/>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                    <Nav pullRight>
                        <IndexLinkContainer to="/"><NavItem eventKey={1}>Home</NavItem></IndexLinkContainer>
                        <LinkContainer to="/projects"><NavItem eventKey={2}>Projects</NavItem></LinkContainer>
                        <LinkContainer to="/passion"><NavItem eventKey={3}>Passion</NavItem></LinkContainer>
                        <LinkContainer to="/contact"><NavItem eventKey={4}>Contact</NavItem></LinkContainer>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            
                {this.props.children}

                <div id="footer">
                    <Col md={6}><a href="#">Download Resume</a></Col>
                    <Col md={6}><a href="#">Contact Me</a></Col>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.element
};

export default App;