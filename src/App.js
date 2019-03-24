import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';

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
      <Router>
        <div className="App">
          <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/contact" component={Contact} />
          <Footer />
        </div>
      </Router>

    );
  }
}

export default App;
