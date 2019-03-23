import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

class Footer extends Component {
    constructor() {
        super();

        this.state = {
            copy: "&copy 2019"
        }
    }

    render() {
        return (
            <footer className="page-footer blue-grey">
                <div className="footer-copyright">
                    <div className="container">
                    &copy; 2019
                        <b className="blue-grey-text text-lighten-3"> Justin Gerow  </b>
                        <a href="https://github.com/jmgerow" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-2x" id="footer-icons"></i></a>
                        <a href="https://www.linkedin.com/in/justingerow/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-2x" id="footer-icons"></i></a>
                        <a href="https://twitter.com/jmgerow" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square fa-2x" id="footer-icons"></i></a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;