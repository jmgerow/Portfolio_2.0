import React, { Component } from 'react';

import './Portfolio.css';

import calsnap from '../../images/calsnap-logo-port.png';
import waiter from '../../images/waitER.PNG';
import brain from '../../images/brain.jpg';
import article from '../../images/article-scraper.PNG';
import burger from '../../images/burger.jpg';
import friends from '../../images/friends.jpg';
import scrabble from '../../images/scrabble.jpg';
import shft from '../../images/shft.PNG';
import pyramid from '../../images/pyramid.jpg';
import train from '../../images/train.jpg';
import crystal from '../../images/crystal.jpg';

class Portfolio extends Component {

    render() {
        return (
            <div className="container">
                <div className="row blue-grey-text text-darken-1" id="title">
                    <h3>Portfolio</h3>
                </div>
                <div className="row blue-grey-text text-darken-1" id="portfolio">
                    <div className="portfolio-item col s12 m6 xl4">
                        CalSnap
                        <div className="image-background">
                            <a href="https://calsnap.herokuapp.com/">
                                <img src={calsnap} className="nav-images" alt="CalSnap"></img>
                                <div className="middle">
                                    <div className="middle-text">Calorie tracker using visual recognition to identify your food items! Made using React.js</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="portfolio-item col s12 m6 xl4">
                        wait<i>ER </i>App
                        <div className="image-background">
                            <a href="https://wait-er-2018.herokuapp.com/">
                                <img src={waiter} className="nav-images" alt="waitER"></img>
                                <div className="middle">
                                    <div className="middle-text">WaitER is a full stack app that lets a user view hospitals near
                                their location with current ER wait times</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="portfolio-item col s12 m6 xl4">
                        Memory Game
                        <div className="image-background">
                            <a href="https://jmgerow.github.io/Memory-Game/">
                                <img src={brain} className="nav-images" alt="Memory Game"></img>
                                <div className="middle">
                                    <div className="middle-text">Click each image only once to win! See if you can get all 12. Made
                                using React.js</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="portfolio-item col s12 m6 xl4">
                        Article Scraper
                        <div className="image-background">
                            <a href="https://boiling-savannah-42052.herokuapp.com/">
                                <img src={article} className="nav-images" alt="Article Scraper"></img>
                                <div className="middle">
                                    <div className="middle-text">Article Scraper displays current articles from The New York Times
                                Technology Section.</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="portfolio-item col s12 m6 xl4">
                        Burger App
                        <div className="image-background">
                            <a href="https://fierce-ridge-79914.herokuapp.com/">
                                <img src={burger} className="nav-images" alt="Burger App"></img>
                                <div className="middle">
                                    <div className="middle-text">Burger App is a full stack application that allows you to create,
                                devour, and re-make your favorite burgers!</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="portfolio-item col s12 m6 xl4">
                        Friend Finder
                        <div className="image-background">
                            <a href="https://thawing-oasis-43899.herokuapp.com/">
                                <img src={friends} className="nav-images" alt="Friend Finder"></img>
                                <div className="middle">
                                    <div className="middle-text">Friend Finder will match you with like-minded individuals after
                                completing a short survey</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="portfolio-item col s12 m6 xl4">
                        Word Guess
                        <div className="image-background">
                            <a href="https://jmgerow.github.io/Word-Guess-Game/">
                                <img src={scrabble} className="nav-images" alt="Word Guess"></img>
                                <div className="middle">
                                    <div className="middle-text">Word Guess is my take on Hangman with a Middle-Earth twist!</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="portfolio-item col s12 m6 xl4">
                        SHFT App
                        <div className="image-background">
                            <a href="https://jmgerow.github.io/Billion_Dollar_Project/">
                                <img src={shft} className="nav-images" alt="SHFT"></img>
                                <div className="middle">
                                    <div className="middle-text">SHFT is an app that gives users the ability to invite their
                                friends to a group and helps them decide on events to attend</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="portfolio-item col s12 m6 xl4">
                        Gif Generator
                        <div className="image-background">
                            <a href="https://jmgerow.github.io/Giphy/">
                                <img src={pyramid} className="nav-images" alt="Gif Generator"></img>
                                <div className="middle">
                                    <div className="middle-text">Gif Generator lets you display 10 gifs of any topic. Choose from
                                the preset topics or create a new one. Click the image to animate</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="portfolio-item col s12 m6 xl4">
                        Train Schedule
                        <div className="image-background">
                            <a href="https://jmgerow.github.io/Train_Schedule/">
                                <img src={train} className="nav-images" alt="Train"></img>
                                <div className="middle">
                                    <div className="middle-text">Simulated train schedule using moment.js to calculate arrival
                                times based on your current time.</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="portfolio-item col s12 m6 xl4">
                        Crystal Collector
                        <div className="image-background">
                            <a href="https://jmgerow.github.io/unit-4-game">
                                <img src={crystal} className="nav-images" alt="Crystal"></img>
                                <div className="middle">
                                    <div className="middle-text">Crystal Collector is a fun memory game that puts your math skills
                                to the test!</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Portfolio;