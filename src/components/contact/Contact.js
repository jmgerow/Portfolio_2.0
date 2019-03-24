import React, { Component } from 'react';

import './Contact.css';

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            message: "",
            email: ""
        }
    };

    collectMessage = (event) => {
        event.preventDefault();
        window.open("mailto:justingerow1@gmail.com?subject=Message from "+this.state.name+"&body="+this.state.message);
        this.setState({ name: "", message: "", email: ""})
    };

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
    };
    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
    };
    handleMessageChange = (e) => {
        this.setState({ message: e.target.value });
    };



    render() {
        return (
            <div className="container">
                <div className="row blue-grey-text text-darken-1" id="title">
                    <h3>Contact</h3>
                </div>
                <div className="row center">
                    <a href="https://github.com/jmgerow" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-6x" id="contact-icons"></i></a>
                    <a href="https://www.linkedin.com/in/justingerow/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-6x" id="contact-icons"></i></a>
                    <a href="https://twitter.com/jmgerow" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square fa-6x" id="contact-icons"></i></a>
                    <a href="mailto:justingerow1@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope-square fa-6x" id="contact-icons"></i></a>
                </div>

                <div className="row blue-grey-text text-darken-1" id="contact">
                    <form id="contact-form">
                        <ul>
                            <li>
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" placeholder="John Smith" required="required"
                                    value={this.state.name} onChange={this.handleNameChange}
                                />
                            </li>
                            <li>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="example@gmail.com" required="required"
                                    value={this.state.email} onChange={this.handleEmailChange}
                                />
                            </li>
                            <li>
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" required="required"
                                    value={this.state.message} onChange={this.handleMessageChange}    
                                />
                            </li>
                        </ul>
                        <button className="btn waves-effect waves-light blue-grey" type="submit" name="action" onClick={this.collectMessage}>Submit
                            <i className="material-icons right">send</i>
                        </button>
                    </form>
                </div>

            </div>
        );
    };
};

export default Contact;