import React from 'react';
import './DailySchedule.css'

const DailySchedule = () => {
    return (
        <div className='schedule'>
            <div className='schedule__text'>
                <h1>Your Daily Schedule</h1>
                <p>Microverse’s immersive, full-time structure 
                    helps you keep pushing yourself to your full potential.
                </p>
                <p>Every day you'll complete individual and collaborative work. 
                    Each week you'll complete projects that apply your new skills. 
                    All while developing valuable technical and professional skills 
                    that employers look for
                </p>
            </div>
            <div className='schedule__table'>
                <div className='schedule__table__text'>
                    <h3>Monday - Friday</h3>
                    <p>Current time zones available: UTC -6 and UTC +1</p>
                </div>
                <div className='schedule__table__program'>
                    <p className='time'>8 am - 8:30 am</p>
                    <h3 className='activity'>Morning team session</h3>
                </div>
                <div className='schedule__table__program'>
                    <p className='time'>8 am - 8:30 am</p>
                    <h3 className='activity'>Morning team session</h3>
                </div>
                <div className='schedule__table__program'>
                    <p className='time'>8 am - 8:30 am</p>
                    <h3 className='activity'>Morning team session</h3>
                </div>
                <div className='schedule__table__program'>
                    <p className='time'>8 am - 8:30 am</p>
                    <h3 className='activity'>Morning team session</h3>
                </div>
                

            </div>
        </div>
    );
};

export default DailySchedule;