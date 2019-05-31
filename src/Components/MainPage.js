import React, { Component } from 'react';

import './MainPageStyling.css';
import Navbar from './Navbar/Navbar';
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skills/Skills';
import Portfolio from './Portfolio/Portfolio';
import Footer from './Footer/Footer';
import Contact from './Contact/Contact';
import Intro from './Intro/Intro';



class MainPage extends Component {


    render() {

        return (
            <div>
                <Navbar />
                <div className="parallax">
                    <Intro />
                </div>
                <AboutMe />
                <Skills />
                <Portfolio />
                <div className="parallax2">
                    <Contact />
                </div>
                <Footer />
            </div>
        )
    }
}

export default MainPage;