import React, { memo } from 'react';
import './Companies.css';
import logo1 from '../../images/logo1.svg'
import logo2 from '../../images/logo2.svg'
import logo3 from '../../images/logo3.svg'
import logo4 from '../../images/logo4.svg'
import logo5 from '../../images/logo5.svg'
import logo7 from '../../images/logo7.png'








const Companies = memo(() => {
    return (
        <div className='companies'>
                <h1>
                  Microverse students are hired by companies of all sizes, globally
                </h1>
                <div className='contents'>            
                    <img src={logo1} />                 
                    <img src={logo2} />                   
                    <img src={logo3} />                  
                    <img src={logo4} />                   
                    <img src={logo5} />
                    <img src={logo7} />
                </div>
        </div>
    );
});

export default Companies;