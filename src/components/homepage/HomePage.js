import React from 'react';
import NavBar from '../navBar/NavBar';
import Home from '../section1/Home';
import Testimonail from '../section2/Testimonail';
import Program from '../section3/Program';
import Companies from '../section4/Companies';
import Curriculum from '../section5/Curriculum';
import SignUp from '../section6/SignUp';
import FindUs from '../section7/FindUs';
import Experience from '../section8/Experience';
import DailySchedule from '../section9/DailySchedule';
import ApplicationProcess from '../section11/ApplicationProcess';
import Discover from '../section12/Discover';
import Footer from '../section13/Footer';

const HomePage = () => {
    return (
        <div>
            <NavBar />
            <Home />
            <Testimonail />
            <Program />
            <Companies />
            <Curriculum />
            <SignUp />
            <FindUs />
            <Experience />
            <DailySchedule />
            <ApplicationProcess />
            <Discover />
            <Footer />
        </div>
    );
};

export default HomePage;