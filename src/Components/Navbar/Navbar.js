import React, { Component } from 'react';

import './Navbar.css';



class Navbar extends Component {



    render() {

        return (

            <div className='dropdown'>
                <div className='dropdown-trigger'>
                    <a className="button is-dark is-inverted is-outlined">Menu</a>
                </div>
            </div>


        )
    }
}

export default Navbar;