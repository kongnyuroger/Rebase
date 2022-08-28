import React from 'react';
import './ExperienceCard.css'

export const ExperienceCard1 = ({header, text1, text2, image}) => {
    return (
        <div className='experience-card'>
            <div className='experience-card__text'>
                <h1>{header}</h1>
                <p>
                {text1}
                </p>
                <p>
                {text2}
                </p>
            </div>
            <img src={image}/>
        </div>
    );
};

export const ExperienceCard2 = ({header, text1, text2, image}) => {
    return (
        <div className='experience-card card-2'>
            <div className='experience-card__text-2'>
                <h1>{header}</h1>
                <p>
                {text1}
                </p>
                <p>
                {text2}
                </p>
            </div>
            <img src={image}/>
            
        </div>
    );
};
