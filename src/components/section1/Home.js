import React from 'react';
import MainButton from '../litleComponents/mainB/MainButton';
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <div className="home__text-box">
                <h1>Become an international software developer from anywhere</h1>
                <p>Gain the skills you need to get hired. Learn 
                   online, connect to life-changing opportunities. 
                   <span>Pay $0 until you land a job!</span>
                </p>
                <MainButton text='Apply Now'
                className='home-btn'
                className2='home-btn__text'
                />
            </div>
            <div className='home__img-box'>
                <img alt='' src={require('../../images/img1.jpg')} />
            </div>
        </div>
    ); 
};

export default Home;