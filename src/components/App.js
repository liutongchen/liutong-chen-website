import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">React-Bootstrap</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">Link Right</NavItem>
                        <NavItem eventKey={2} href="#">Link Right</NavItem>
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