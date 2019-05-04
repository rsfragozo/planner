import React from 'react';

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - { id }</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis laboriosam ipsam eaque voluptatibus, nemo necessitatibus debitis suscipit quos iusto voluptatum accusamus vitae minus quibusdam? Exercitationem placeat saepe laudantium expedita hic!</p>
                </div>
                <div className="card-action great lighten-4 grey-text">
                    <p>Posted by Rodrigo</p>
                    <p>2nd September 2018</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;