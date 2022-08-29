import React from 'react';
import './Experience.css'
import SectionTitle from '../litleComponents/sectionTitle/SectionTitle';
import { ExperienceCard1, ExperienceCard2 } from '../litleComponents/experienceCard/ExperienceCard';


const Experience = () => {
    return (
        <div id='experience' className='experience'>
            <SectionTitle
            header='The Rebase Experience'
            text='Your Microverse experience centers around accountability, 
                support, and community. You learn in an environment that mimics
                 a real-world remote workspace.'
            />
             <ExperienceCard1
             header='Your Collaborative Experience'
             text1='Learning to code on your own can be lonely and difficult. 
                    At Microverse, you’ll join one of the most collaborative and social
                    learning communities in the world.'
             text2='Throughout the program, you learn through 
                    collaborating with your peers in daily meetings, 
                    group projects, and remote pair programming.'
             image={require('../../images/img8.png')}
             />
             <ExperienceCard2
             header='Your Collaborative Experience'
             text1='Besides your peers, you have our student success 
                    team a student mentor, and a personal career coach, to 
                    support you on your journey'
             text2='From project reviews and answering tough questions, to 
                    helping you negotiate job offers and prepare for interviews, 
                    yo be in good company as you go through the program.'
             image={require('../../images/img9.png')}
             />
        </div>
    );
};

export default Experience;