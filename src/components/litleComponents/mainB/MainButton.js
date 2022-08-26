import React from 'react';
import './MainButton.css'

const mainButton = ({text}) => {
    return (
        <button className='main-button'> 
            <span>{text}</span>
        </button>
    );
};

export default mainButton;