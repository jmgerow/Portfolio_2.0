import React, { Component } from 'react';

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
            <div className='brand-logo left blue-grey-text text-darken-1'>
              {this.state.title}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;