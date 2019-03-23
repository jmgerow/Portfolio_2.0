import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      title: "Justin Gerow"
    }
  }

  render() {
    return (
      <div className="navbar-fixed">
        <nav className="white">
          <div className="container nav-wrapper white">
            <Link className='brand-logo left blue-grey-text text-darken-1' to="/">
              {this.state.title}
            </Link>
            <ul className="right hide-on-med-and-down">
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
      </div>
    );
  }
}

export default Navbar;