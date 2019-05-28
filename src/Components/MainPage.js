import React, { Component } from 'react';

import Navbar from './Navbar/Navbar';
import './MainPageStyling.css';



class MainPage extends Component {


    render() {



        return (
            <div className=''>

                <div className="parallax">
                    <Navbar />
                </div>
                <section className='text'>
                    <h1>Section Content</h1>
                </section>

            </div>

        )
    }
}

export default MainPage;


// {/* <div className="parallax"></div>
// <div className='text2'>
//     Bam!
// </div> */}