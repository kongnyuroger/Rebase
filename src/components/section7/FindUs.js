import React from 'react';
import './FindUs.css'
import logo32 from '../../images/logo32.jpg'
import logo33 from '../../images/logo33.png'
import logo34 from '../../images/logo34.svg'
import logo35 from '../../images/logo35.png'
import logo38 from '../../images/logo38.svg'
import logo39 from '../../images/logo39.svg'
import logo40 from '../../images/logo40.svg'

const FindUs = () => {
    return (
        <div className='find-us'>
            <h2>You may have seen us in..</h2>
            <div className='find-us__content'>
                    <img src={logo32}/>
                    <img src={logo33}/>
                    <img src={logo34}/>
                    <img src={logo35}/>
                    <img src={logo38}/>
                    <img src={logo39}/>
                    <img src={logo40}/>
            </div>
        </div>
    );
};

export default FindUs;