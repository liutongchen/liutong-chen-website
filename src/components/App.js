import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import personalInfo from '../info.json';

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                    <Navbar.Brand>
                       <img className="img-circle" src={personalInfo.basicInfo.selfie}/>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1}><Link to="/">Home</Link></NavItem>
                        <NavItem eventKey={2}><Link to="/projects">Projects</Link></NavItem>
                        <NavItem eventKey={2}><Link to="/passion">Passion</Link></NavItem>
                        <NavItem eventKey={2}><Link to="/contact">Contact</Link></NavItem>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            
                {this.props.children}
            </div>
        )
    }
}

App.propTypes = {
    children: PropTypes.element
}

export default App;