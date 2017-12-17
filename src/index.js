import React from 'react';
import {render} from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './styles/styles.css';
import Header from './components/commons/Header';
import Footer from './components/commons/Footer';
import HomePage from './components/Home/HomePage';
import ProjectsPage from './components/Projects/ProjectsPage';
import PassionPage from './components/Passion/PassionPage';
import ContactPage from './components/Contact/ContactPage';

const history = createBrowserHistory();

render(
    <Router history={history}>
        <div>
            <Header/>
            <Route exact path="/" component={HomePage}/>
            <Route path="/projects" component={ProjectsPage}/>
            <Route path="/passion" component={PassionPage}/>
            <Route path="/contact" component={ContactPage}/>
            <Footer/>
        </div>
    </Router>,
    document.getElementById("app")
);