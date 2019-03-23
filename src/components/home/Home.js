import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import skyline from '../../images/chicago.jpg';

import './Home.css';

class Home extends Component {

  render() {
    return (
      <div className="body">
        <img src={skyline} alt="skyline" className="responsive-img skyline-photo"></img>
      </div>
    );
  }
}

export default Home;