import React from 'react';
import './LogIn.css'
import img16 from '../../images/img16.jpeg'

const LogIn = () => {
    return (
        <div className='log-in'>
            <div className='image-box'>
              
            </div>
            <div className='text-box'>
                <div className='text-box__header'>
                    <h1>Rebase</h1>
                    <h2>Create your Rebase account</h2>
                    <p>Start your application to become a remote software developer.</p>
                </div>
                <form>
                    <div className='input-names'>
                        <div className='name'>
                            <p>First Name</p>
                            <input></input>
                        </div>
                        <div className='name'>
                            <p>Last Name</p>
                            <input></input>
                        </div>
                    </div>
                    <div className='email'>
                        <p>Email</p>
                        <input></input>
                    </div>
                    <div className='password'>
                        <p>password</p>
                        <input></input>
                    </div>
                    <p className='check-text'> <input className='check-box' type='checkbox' /> I would like to receive updates regarding Microverse and my application process in my inbox.</p>
                    <button className='log-in-btn'>Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default LogIn;