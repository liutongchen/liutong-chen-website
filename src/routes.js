import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/Home/HomePage';
import ProjectsPage from './components/Projects/ProjectsPage';
import PassionPage from './components/Passion/PassionPage';
import ContactPage from './components/Contact/ContactPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="projects" component={ProjectsPage}/>
        <Route path="passion" component={PassionPage}/>
        <Route path="contact" component={ContactPage}/>
    </Route>
);