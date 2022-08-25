import React from 'react';
import './TestimonailBox.css'

const TestimonailBox = ({text, personality, imgSrc}) => {
    return (
        <div className='testimonail-box'>
            <p className='testimonail-box__text'>
            {text}
            </p>
            <div className='testimonail-box__ address'>
                <h3>{personality}</h3>
            </div>
            <img className='testimonail-box__img' src={imgSrc} />
        </div>
    );
};

export default TestimonailBox;