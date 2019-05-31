import React, { Component } from 'react';

import './Navbar.css';



class Navbar extends Component {



    render() {

        return (
            <div className='nav'>
                <div className='navbar-item dropdown is-right is-hoverable'>
                    <div className='dropdown-trigger navbar-end'>
                        <button className='button is-dark' aria-haspopup='true' aria-controls='dropdown-menu4'>
                            <span>Menu</span>
                            <span className="icon is-small">
                                <i className="fas fa-angle-down" aria-hidden="true"></i>
                            </span>
                        </button>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu6" role="menu">
                        <div className="dropdown-content">
                            <div className="dropdown-item">

                                <aside className="menu">
                                    <p className="menu-label">
                                        Menu
                                    </p>
                                    <ul className="menu-list">
                                        <li><a>About Me</a></li>
                                        <li><a>Skills</a></li>
                                        <li><a>Portfolio</a></li>
                                        <li><a>Contact</a></li>
                                    </ul>
                                </aside>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Navbar;

// {/* <div className="navbar-end">
//                     <div className="navbar-item">
//                         <div className="buttons">
//                             <div className="navbar-item has-dropdown is-right is-hoverable">
//                                 <a className="navbar-link">
//                                     Menu
//                                 </a>

//                                 <div className="navbar-dropdown">
//                                     <a className="navbar-item">
//                                         About Me
//                                     </a>
//                                     <a className="navbar-item">
//                                         Skills
//                                     </a>
//                                     <a className="navbar-item">
//                                         Portfolio
//                                     </a>
//                                     <hr className="navbar-divider" />
//                                         <a className="navbar-item">
//                                             Contact
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div> */}