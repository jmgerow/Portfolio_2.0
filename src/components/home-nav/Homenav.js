import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Homenav.css';

class Homenav extends Component {

    render() {
        return (
            <div className="home-nav container">
                <div className="row center blue-grey-text text-darken-1" id="navigation">
                    <div className="col s12 m6 xl3 home-nav-item">
                        <Link to="/portfolio" className="home-nav-icon">
                            <h3>Portfolio</h3>
                            <i className="fas fa-laptop fa-6x"></i>
                        </Link>
                    </div>
                    <div className="col s12 m6 xl3 home-nav-item">
                        <Link to="/about" className='home-nav-icon' >
                            <h3>Bio</h3>
                            <i className="far fa-user fa-6x"></i>
                        </Link>
                    </div>
                    <div className="col s12 m6 xl3 home-nav-item">
                        <Link to="/resume" className='home-nav-icon'>
                            <h3>Resume</h3>
                            <i className="far fa-file-alt fa-6x"></i>
                        </Link>
                    </div>
                    <div className="col s12 m6 xl3 home-nav-item">
                        <Link to="contact" className='home-nav-icon'>
                            <h3>Contact</h3>
                            <i className="far fa-comment fa-6x"></i>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Homenav;