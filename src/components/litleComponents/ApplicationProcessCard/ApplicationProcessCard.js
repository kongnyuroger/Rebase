import React from 'react';
import './ApplicationProcessCard.css'

const ApplicationProcessCard = ({cardNum, header, span1, span2, text, spanBgColor1='',spanBgColor2=''}) => {
    return (
        <div className='application-process-card'> 
            <h1 className='application-process-card__header'><span>{cardNum}</span>{header}</h1>
            <div className='application-process-card__contents'>
                <span className={spanBgColor1}>{span1}</span>
                <span className={spanBgColor2}>{span2}</span>
                <p className='application-process-card__contents__text'>{text}</p>
            </div>
        </div>
    );
};

export default ApplicationProcessCard;