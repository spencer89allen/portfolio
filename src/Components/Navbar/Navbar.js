import React, { Component } from 'react';

import './Navbar.css';



class Navbar extends Component {



    render() {

        return (
            <div className='nav'>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <div className="navbar-item has-dropdown is-hoverable">
                                <a className="navbar-link">
                                    More
                                </a>

                                <div className="navbar-dropdown">
                                    <a className="navbar-item">
                                        About Me
                                    </a>
                                    <a className="navbar-item">
                                        Skills
                                    </a>
                                    <a className="navbar-item">
                                        Portfolio
                                    </a>
                                    <hr className="navbar-divider" />
                                        <a className="navbar-item">
                                            Contact
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        )
    }
}

export default Navbar;