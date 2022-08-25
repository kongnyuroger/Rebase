import React from 'react';
import ProjectBox from '../litleComponents/projectBox/ProjectBox';
import SectionTitle from '../litleComponents/sectionTitle/SectionTitle';
import './Program.css'

const Experience = () => {
    return (
        <>
        <section className='program'>
            <SectionTitle 
            header='A New Learning Experience'
            text='Rebase invests in you. Our team supports you throughout your journey with us, and your 
            career. New cohorts start every 5 weeks, learn more about our next start dates and applying '
            aText='!Here'
            webLink='https://taupe-haupia-a63e20.netlify.app/'/>
            
            <div className='programs'>
                <ProjectBox
                image={require('../../images/img3.jpg')}
                header='NO UPFRONT COST'
                text='Learn through pair programming, group projects, career coach guidance, and project reviews.'
                />
                <ProjectBox
                image={require('../../images/img4.jpg')}
                header='COLLABORATIVE LEARNING'
                text='Learn through pair programming, group projects, career coach guidance, and project reviews.'
                />
                <ProjectBox
                image={require('../../images/img7.jpg')}
                header='GLOBAL OPPORTUNITIES'
                text='Connect with global jobs after gaining experience working on a remote team. Learn more ➞'
                />
                <ProjectBox
                image={require('../../images/img5.jpg')}
                header='SUPPORT AND ACCOUNTABILITY'
                text='Receive support from our dedicated Student Success Team, mentors, a personal career coach, and more.'
                />
            </div>
        </section>
        <div className='rates'>
        <div className='rate-box'>
            <h1>85%</h1>
            <p>85% of students land a job within 3 months of job searching</p>
        </div>
        <div className='rate-box'>
            <h1>3x your salary</h1>
            <p>Rebase alums make 3x their previous salaries on average</p>
        </div>
        <div className='rate-box'>
            <h1>90%</h1>
            <p>90% of job offers students receive are for remote roles</p>
        </div>
    </div>
    </>
    );
};

export default Experience;