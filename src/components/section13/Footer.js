import React from 'react';
import FooterCard from '../litleComponents/footerCard/FooterCard';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <FooterCard
            header='Company'
            text1='About Us'
            text2='Careers'
            text3='Press Kit'
            text4='Contact Us'
            text5='Privacy Policy'
            text6='Terms & Condition'
            />

            <FooterCard
            header='Resources'
            text1='Apply Now'
            text2='FAQs'
            text3='Syllabus'
            text4='Refer a Friend'
            text5='Blog'
            text6='Our Webinars' 
            />

            <FooterCard
            header='Other Resources'
            text1='Is Microverse Worth It? Here is What Students Have To Say'
            text2='Starting Salary in Software Development Around the World - 2022'
            text3='Introduction to JavaScript: A Guide for Beginners'
            text4='10 Coding Challenges, Tips, and Websites to Practice – 2022'
            />

            <div className='footer-card4'>
                <h1>Rebase</h1>
                <p>Talent is everywhere, but opportunity is not.</p>
                <p>Follow us on our journey to close the gap and connect one million people to remote jobs by 2030.</p>
                <div className='footer-card4__icons'>
                <i class="fa-brands fa-square-facebook"></i>
                <i class="fa-brands fa-square-instagram"></i>
                <i class="fa-brands fa-square-twitter"></i>
                <i class="fa-brands fa-youtube"></i>
                </div>
            </div>
        </div>
    );
};

export default Footer;