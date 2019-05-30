import React, { Component } from 'react';

import './MainPageStyling.css';
import Navbar from './Navbar/Navbar';
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skills/Skills';
import Portfolio from './Portfolio/Portfolio';
import Footer from './Footer/Footer';



class MainPage extends Component {


    render() {



        return (
            <div className=''>

                <Navbar />
                <div className="parallax">
                </div>
                <AboutMe />
                <Skills />
                <Portfolio />
                <div className="parallax2">
                </div>
                <Footer />
            </div>

        )
    }
}

export default MainPage;


// {/* <div className="parallax"></div>
// <div className='text2'>
//     Bam!
// </div> */}