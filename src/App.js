import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      intro: ""
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;
