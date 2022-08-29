import React from 'react';
import MainButton from '../litleComponents/mainB/MainButton';
import './SignUp.css'

const SignUp = () => {
    return (
        <div className='sign-up'>
            <div className='sign-up__content'>
                <h2>Want to learn more about our program? <br></br>
                    Sign up to receive our syllabus below!
                </h2>
                <input className='email' type='text' placeholder='Your Email Address' />
                <p><input type="checkbox" />I authorize Microverse to send the syllabus and information about the Software Development Program to my email.</p>
                <MainButton text='GET SYLLABUS'
                className='sign-up-btn'
                className2='sign-up-text'
                />
            </div>
        </div>
    );
};

export default SignUp;