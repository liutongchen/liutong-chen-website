import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import personalInfo from '../../../src/info';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

//globals
let didScroll = false;
let lastScrollTop = 0;
let delta = 5;
let navbarHeight;


class Header extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        const navbar = document.getElementById("navbar");
        navbarHeight = navbar.offsetHeight;

        function hasScrolled() {
            let st = window.scrollY;
            if (Math.abs(lastScrollTop - st) <= delta) { return; }
            if (st > lastScrollTop && st > navbarHeight) {
                //scroll down
                navbar.classList.remove("nav-down");
                navbar.classList.add("nav-up");
            } else {
                //scroll up but insure window doesn't exceed ducument
                if(st + window.innerHeight < st + document.body.clientHeight) {
                    navbar.classList.remove("nav-up");
                    navbar.classList.add("nav-down");
                }
            }
            lastScrollTop = st;
        }

        window.addEventListener("scroll", function () {
            didScroll = true;
            setInterval(function () {
                if (didScroll) {
                    hasScrolled();
                    didScroll = false;
                }
            }, 250);
        });
    }

    render() {
        return (
            <div>
                <Navbar inverse collapseOnSelect id="navbar" className="nav-down">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/"><img id="navbarSelfie" className="img-circle" src={personalInfo.basicInfo.selfie} /></Link>
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

            </div>
        );
    }
}

Header.propTypes = {
    children: PropTypes.element
};

export default Header;