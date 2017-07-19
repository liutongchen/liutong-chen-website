import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import configureStore from './store/configureStore';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './styles/styles.css';
import Header from './components/commons/Header';
import Footer from './components/commons/Footer';
import HomePage from './components/Home/HomePage';
import ProjectsPage from './components/Projects/ProjectsPage';
import PassionPage from './components/Passion/PassionPage';
import ContactPage from './components/Contact/ContactPage';

const store = configureStore();
const history = createBrowserHistory();

render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Header/>
                <Route exact path="/" component={HomePage}/>
                <Route path="/projects" component={ProjectsPage}/>
                <Route path="/passion" component={PassionPage}/>
                <Route path="/contact" component={ContactPage}/>
                <Footer/>
            </div>
        </Router>
    </Provider>,
    document.getElementById("app")
);