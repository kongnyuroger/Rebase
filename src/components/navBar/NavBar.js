import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import MainButton from '../litleComponents/mainB/MainButton';
import './NavBar.css'


function NavBar() {
    const navRef = useRef();
    const showNavBar = () => {
        navRef.current.classList.toggle('responsive-nav')
    }
    
    return (
        <div className='nav-bar active'>
            <h1 className='logo'>Rebase</h1>
            <nav ref={navRef}> 
                <a href='#curriculum'>Curriculum</a>
                <a href='#experience'>Experience</a>
                <a href='#testimonies'>Testimonies</a>
                <a href='#discover'>Discover</a>
                <a href='#apply-process'>Apply process</a>
                <a href='#companies'>For Companies </a>
                <a href='#'>Log In</a>  
                <Link to='/log-in'>
                    <MainButton text='Apply Now'
                    className='big-btn'
                     className2='btn-text'
                    />  
                </Link>
                <button className='nav-btn nav-close-btn' onClick={showNavBar}>
                    <FaTimes />
                </button>
            </nav>
            <button className='nav-btn nav-open-btn' onClick={showNavBar}>
                <FaBars />
            </button>
        </div>
    );
}

export default NavBar;