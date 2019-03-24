import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import skyline from '../../images/chicago.jpg';

import Homenav from '../home-nav/Homenav';

import './Home.css';

class Home extends Component {
    constructor() {
        super();

        this.state = {
            title: "Justin Gerow"
        }
    }

    render() {
        return (
            <div className="body">
                <div className="banner">
                    <img src={skyline} alt="skyline" className="responsive-img skyline-photo"></img>
                    <div className="container">
                        <div className="row center headline blue-grey-text text-darken-1">
                            <p className="header col s12 light" id="intro">Welcome to my portfolio. This site contains a collection
                            of my works, info about me, and a contact form to leave a note. Thank you for visiting!</p>
                        </div>
                    </div>
                </div>
                <Homenav />
            </div>
        );
    }
}

export default Home;