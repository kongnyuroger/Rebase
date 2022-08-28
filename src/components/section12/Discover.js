import React from 'react';
import './Discover.css'
import SectionTitle from '../litleComponents/sectionTitle/SectionTitle';
import ProjectBox from '../litleComponents/projectBox/ProjectBox'
import img111 from '../../images/img111.jpg'
import img112 from '../../images/img112.jpg'
import img113 from '../../images/img113.jpg'

const Discover = () => {
    return (
        <div className='discover'>
            <SectionTitle
            header='Discover the latest at Microverse'
            text='Learn about our latest news, alum spotlights, coding and career advice, remote team building, and more.'
            />
            <div className='discover__contents'>
                <ProjectBox
                className='change-text-style'
                image={img111}
                header ='10 Advanced Javascript Code Challenges'
                text='10 Advance Javascript Challenges that you can use to improve your coding skills.'
                />
                <ProjectBox
                className='change-text-style'
                image={img112}
                header ='How to Work With JSON in Javascript'
                text='Leane how to work with JSON in Javascript. JSON stands for Javascript Object Notation
                    and it as an object-oriented data exchange format used to transmit data from one program to another.'
                />
                <ProjectBox 
                className='change-text-style'
                image={img113}
                header='Microverse and Tunga Partner to Help More African Developers Succeed'
                text ='We are exited to announs are partnership Tunga to be able to help more 
                talented people in Afica connect to life changing opportunities and excel in
                international Tech Career'
                />
            </div>
        </div>
    );
};

export default Discover;