import React from 'react';
import { useRef } from 'react';
import SectionTitle from '../litleComponents/sectionTitle/SectionTitle';
import './Curriculum.css';
import logo24 from '../../images/logo24.svg'
import logo25 from '../../images/logo25.png'
import logo26 from '../../images/logo26.svg'
import logo27 from '../../images/logo27.svg'
import logo29 from '../../images/logo29.png'
import logo30 from '../../images/logo30.png'
import logo31 from '../../images/logo31.png'

const Curriculum = () => {
    const drop1Ref = useRef();
    const showDropDown1 = () => {
        drop1Ref.current.classList.toggle('show-drop-down');
        changeBtnColor1.current.classList.toggle('changeb-btn-color')
    }
    const drop2Ref = useRef();
    const showDropDown2 = () => {
        drop2Ref.current.classList.toggle('show-drop-down2');
        changeBtnColor2.current.classList.toggle('changeb-btn-color')
    }
    const changeBtnColor1 = useRef();
    const changeBtnColor2 = useRef();
    
    return (
        <div id='curriculum' className='curriculum'>
            <div className='text-box__content'>
                <div className='curriculum__text-box'>
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
                        <button ref={changeBtnColor1} onClick={showDropDown1}>Technical Skills</button>     
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
                        <button ref={changeBtnColor2} onClick={showDropDown2}>Soft Skills</button>     
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
            <div className='programming-language'>
                <img src={logo24} />
                <img src={logo25} />
                <img src={logo26} />
                <img src={logo27} />
                <img src={logo29} />
                <img src={logo30} />
                <img src={logo31} />
            </div>
          
        </div>
    );
};

export default Curriculum;