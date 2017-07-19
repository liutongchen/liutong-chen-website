import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';

const ProjectComponents = ({projectsList}) => {
    const projectsElements = projectsList.map((project) => {
        return (
            <div className="projects" key={project.title}>
                <img src={project.image} alt="Image of project" />
                <h3>{project.title}</h3>
                <p className="projectTech">{project.tech.join(", ")}</p>
                <p className="projectInfo">{project.projectInfo}</p>
                <a href={project.link} target="_blank"><Button bsStyle="primary">Learn More</Button></a>
            </div>
        );
    });
    return (
        <div id="projectComp"> {projectsElements} </div>
    );
};

ProjectComponents.propTypes = {
    projectsList: PropTypes.array.isRequired
};

export default ProjectComponents;
