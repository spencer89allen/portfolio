import React, { Component } from 'react';

import './Contact.css';

class Contact extends Component {



    render() {

        return (
            <section id="contact">
                <div className="inner">
                    <h2 className="major">Get in touch</h2>
                    <p>Whether your a small business owner or the CEO of an international tech empire, I'm always excited for the
				opporunity to help grow your web presence. If you have any questions, never hesitate to drop me a line!</p>
                    <form method="post" action="https://formspree.io/ryanwhitecar@gmail.com">
                        <div className="fields">
                            <div className="field">
                                <label for="name">Name</label>
                                <input type="text" name="name" id="name" />
                            </div>
                            <div className="field">
                                <label for="email">Email</label>
                                <input type="email" name="email" id="email" />
                            </div>
                            <div className="field">
                                <label for="message">Message</label>
                                <textarea name="message" id="message" rows="4"></textarea>
                            </div>
                        </div>
                        <ul className="actions">
                            <li><input type="submit" value="Send Message" /></li>
                        </ul>
                    </form>
                    <ul className="contact">
                        <li className="fa-home">
                            Salt Lake City, UT
				                    </li>
                        <li className="fa-linkedin"><a href="https://www.linkedin.com/in/spencerlallen/">www.linkedin.com/in/spencerlallen/</a></li>
                        <li className="fa-envelope"><a href="mailto:spencerallen77@gmail.com">spencerallen77@gmail.com</a></li>
                        {/* <li className="fa-twitter"><a href="https://twitter.com/thewhitecar_dev">https://twitter.com/thewhitecar_dev</a></li> */}
                        <li className="fa-github"><a href="https://github.com/spencer89allen">https://github.com/spencer89allen</a></li>
                    </ul>
                    <ul className="copyright">
                        
                    </ul>
                </div>
            </section>
        )
    }
}

export default Contact;