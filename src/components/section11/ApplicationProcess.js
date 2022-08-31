import React from 'react';
import './ApplicationProcess.css'
import SectionTitle from '../litleComponents/sectionTitle/SectionTitle';
import ApplicationProcessCard from '../litleComponents/ApplicationProcessCard/ApplicationProcessCard';
import MainButton from '../litleComponents/mainB/MainButton';

const ApplicationProcess = () => {
    return (
        <div id='apply-process' className='applicationProcess'>
            <SectionTitle 
            header='Application Process'
            text='Show us that you are a great team player and determined to work hard to become a successful web developer. A new cohort starts every 5 weeks. You can apply from any country in the world!'
            />
            <div className='applicationProcess-contents'>
                <ApplicationProcessCard 
                cardNum='1'
                header='LEVEL UP'
                span1='OPTIONAL'
                span2='SELF-PACED'
                text='Complete LevelUp, our  pre-Rebase course if you are new to coding or want to prepare for the coding challenges.'
                spanBgColor1='span1-bg-color'
                spanBgColor2='span1-bg-color'

                />
                <ApplicationProcessCard
                cardNum='2'
                header='CODING CHALLENGES'
                span1='REQUIRED'
                span2='2-4 HOURS'
                text='Show us you can think like a software developer by solving a few simple algorithmic coding challenges.'
                spanBgColor1='span2-bg-color'
                spanBgColor2='span2-bg-color'
                />
                <ApplicationProcessCard
                cardNum='3'
                header='TRIALS'
                span1='REQUIRED'
                span2='3 DAYS'
                text='Get paired to 3 other applicants and build a collaborative project with each of them.' 
                spanBgColor1='span2-bg-color'
                spanBgColor2='span2-bg-color'
                />
                <ApplicationProcessCard
                cardNum='4'
                header='FULL-TIME PROGRAM'
                span1='FULL-TIME'
                span2='10 MONTHS'
                text='If you pass the previous steps, you will get invited to become a full-time Rebase student.' 
                spanBgColor1='span4-bg-color'
                spanBgColor2='span4-bg-color'
                />
            </div>
            <div className='ending'>
                <MainButton text='APPLY NOW'
                className='application-process-btn'
                className2='application-process-text'
                />
                <p>Pay Rebase $0 until you get a job.</p>
            </div>
            
        </div>
    );
};

export default ApplicationProcess;