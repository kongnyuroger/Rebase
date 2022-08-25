import React from 'react';
import { useRef } from 'react';
import SectionTitle from '../litleComponents/sectionTitle/SectionTitle';
import './Curriculum.css'

const Curriculum = () => {
    const drop1Ref = useRef();
    const showDropDown1 = () => {
        drop1Ref.current.classList.toggle('show-drop-down')
    }
    const drop2Ref = useRef();
    const showDropDown2 = () => {
        drop2Ref.current.classList.toggle('show-drop-down2')
    }
    return (
        <div className='curriculum'>
            <div className='text-box__content'>
                <div className='text-box'>
                    <div className='text'></div>
                    <h1>A World-Class Curriculum</h1>
                    <p>Our team curates a curriculum that helps you learn the most in-demand
                     skills in web development so you can get a great job, no matter where you live.
                    During our full-time, 10-month program, you’ll develop your technical 
                    skills, build projects, and improve the soft skills you need to excel in remote teams.
                    </p>
                    <p>
                    During our full-time, 10-month program, you’ll 
                    develop your technical skills, build projects, and 
                    improve the soft skills you need to excel in remote teams.
                    </p>
                    <p>At the end of Microverse, your personal career coach will support your job search. They help you 
                    prepare for interviews, negotiate job offers, and start your career as a software developer.</p>
                </div>
                <div className='dropdown-container'>
                    <div className='dropdown-1'>
                        <button onClick={showDropDown1}>Technical Skills</button>     
                            <ul ref={drop1Ref} className='dropdown-content'>
                                <li>HTML & CSS</li>
                                <li>Ruby</li>
                                <li>Databases</li>
                                <li>Ruby on Rails</li>
                                <li>JavaScript</li>
                                <li>React & Redux</li>
                                <li>Algorithms</li>
                                <li>Data Structures</li>
                            </ul>
                    </div>
                    <div className='dropdown-1'>
                        <button onClick={showDropDown2}>Soft Skills</button>     
                            <ul ref={drop2Ref} className='dropdown-content'>
                                <li>Effective Networking</li>
                                <li>Time Management</li>
                                <li>Cross-cultural Communication</li>
                                <li>Remote Work Best Practices</li>
                                <li>How to Prepare for Interviews</li>
                                <li>Effective Job Searching</li>
                            
                            </ul>
                    </div>
                </div>
            </div>
          
        </div>
    );
};

export default Curriculum;