import React from 'react';
import './FooterCard.css'

const FooterCard = ({header, text1, text2, text3, text4, text5, text6}) => {
    return (
        <div className='footer-card'>
            <h2 className='footer-card-header'>{header}</h2>
            <p>{text1}</p>
            <p>{text2}</p>
            <p>{text3}</p>
            <p>{text4}</p>
            <p>{text5}</p>
            <p>{text6}</p>
        </div>
    );
};

export default FooterCard;