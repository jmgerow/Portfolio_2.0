import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      title: "Justin Gerow"
    }
  }

  // componentDidMount() {
  //   var elems = document.querySelectorAll('.sidenav');
  //   var instances = M.Sidenav.init(elems, );
  // }

  render() {
    return (
      <div className="navbar-fixed">
        <nav className="white">
          <div className="container nav-wrapper white">
            <Link className='brand-logo left blue-grey-text text-darken-1' to="/">
              {this.state.title}
            </Link>
            {/* <a href="#" data-target="mobile-demo" className="sidenav-trigger blue-grey-text text-darken-1">
              <i className="material-icons">menu</i>
            </a> */}
            <ul className="right hide-on-small-only nav-items">
              <li>
                <Link className="nav-link blue-grey-text text-darken-1" to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link className="nav-link blue-grey-text text-darken-1" to="/about">About</Link>
              </li>
              <li>
                <Link className="nav-link blue-grey-text text-darken-1" to="/resume">Resume</Link>
              </li>
              <li>
                <Link className="nav-link blue-grey-text text-darken-1" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* <ul className="sidenav" id="mobile-demo">
          <li>
            <a href="portfolio.html">Portfolio</a>
          </li>
          <li>
            <a href="aboutme.html">About Me</a>
          </li>
          <li>
            <a href="resume.html">Resume</a>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
        </ul> */}
      </div>
    );
  }
}

export default Navbar;