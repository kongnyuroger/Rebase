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
                <a href='#'>Curriculum</a>
                <a href='#'>Tuition</a>
                <a href='#'>FAQs</a>
                <a href='#'>Blog</a>
                <a href='#'>Student Outcomes</a>
                <a href='#'>For Companies </a>
                <a href='#'>Log In</a>           
                <MainButton />
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