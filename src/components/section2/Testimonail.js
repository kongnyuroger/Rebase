import React from 'react';
import SectionTitle from '../litleComponents/sectionTitle/SectionTitle';
import TestimonailBox from '../litleComponents/testimonailBox/TestimonailBox';
import './Testimonail.css'

const Testimonail = () => {
    return (
        <div className='testimonail'>
            <SectionTitle 
            header='We help you chang your life'
            text='Rebase students are from countries all over the world.
            When you join Microverse, you learn with a diverse, driven community, and connect to life-changing opportunities. '
            />
            <div className='testimonails__contents'>
                <TestimonailBox
                text='— For me, it was a no-brainer. I wanted to try 
                    Microverse because while the alternatives would give you a tutorial or a course, 
                    you have to do it alone, but with this, I had the accountability.'
                personality = 'Kevin M, Senior Software Developer at Microsoft'
                imgSrc={require('../../images/profile1.jpg')}
                />
                <TestimonailBox 
                text='— "My life has changed 100% since Microverse. 
                    My current salary is 5.6 times more per year than my previous salary."'
                personality='Gabriela C, Frontend Developer at Upstart 13'
                imgSrc={require('../../images/profile2.jpg')}
                />
                <TestimonailBox 
                text='— "To be successful I knew I had to develop skills in 
                    planning, discipline, and productivity. Microverse provided 
                    the structure so I could grow in these areas, which prepared 
                    me for working in the software industry."'
                personality='Alex S, Full-Stack Developer at Doctolib'
                imgSrc={require('../../images/profile3.jpg')}
                />
            </div>
        </div>
    );
};

export default Testimonail;