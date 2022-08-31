import React from 'react';
import './ProjectBox.css'

const ProjectBox = ({image, header, text, className=''}) => {
    return (
        <div className={`project-box ${className}`}>
            <img alt='' src={image} />
            <div className='text-box'>
                <h3>{header}</h3>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default ProjectBox;