import React, { Component } from 'react';

import resume from '../../images/Justin_M_Gerow_-_Resume_v2_web.pdf';

import './Resume.css';

class Resume extends Component {

    render() {
        return (
            <div className="container">
                <div className="row blue-grey-text text-darken-1" id="title">
                    <h3>Resume</h3>
                </div>
                <div className="row">
                    <div className="col s12 center">
                        <embed src={resume} class="resume" />
                    </div>
                </div>
            </div>
        );
    };
};

export default Resume;