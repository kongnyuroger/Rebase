import React from 'react';
import './MainButton.css'

const mainButton = ({text, className='', className2=''}) => {
    return (
        <button className={`main-button ${className}`}> 
            <span className={className2}>{text}</span>
        </button>
    );
};

export default mainButton;