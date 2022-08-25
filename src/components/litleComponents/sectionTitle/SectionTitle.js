import React from 'react';
import './SectionTitle.css'

const SectionTitle = ({webLink, header, text, aText}) => {
    return (
            <>
                <h1 className='header'>{header}</h1>
                <p className='text'>
                    {text}
                    <a href={webLink}> {aText}</a>
                </p>
            </>
    );
};

export default SectionTitle;