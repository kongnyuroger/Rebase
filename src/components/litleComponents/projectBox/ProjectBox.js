import React from 'react';
import './ProjectBox.css'

const ProjectBox = ({image, header, text}) => {
    return (
        <div className='project-box'>
            <img src={image} />
            <div className='text-box'>
                <h3>{header}</h3>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default ProjectBox;