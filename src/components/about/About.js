import React, { Component } from 'react';

import profile from '../../images/profile.jpg';

import './About.css';

class About extends Component {

    render() {
        return (
            <div className="container">
                <div className="row blue-grey-text text-darken-1" id="title">
                    <h3>About Me</h3>
                </div>

                <div className="row">
                    <div className="col sm 12" id="bio">
                        <img className="left" src={profile} id="profile-pic" alt="Justin Gerow"></img>

                        <p>Justin Gerow, based in Chicago, is a Full Stack Web Developer who graduated from the
                            Northwestern University Coding Boot Camp Full Stack Development program.</p>


                        <p>Justin has spent the past 18 years working primarily in the transportation, warehousing, and
                            logistics fields. He started his career in 2000 as a package operations supervisor for a
                            small-parcel company located in Flint, Michigan. Justin spent eight years in this role and during
                            this time also attended the University of Michigan-Flint, where he obtained his Bachelor of
                            Business Administration degree, with a concentration in operations management. In May 2008, he
                            relocated to Irving, Texas, to join a large online retail organization as an area manager in a
                            local fulfillment center. In September 2009, Justin joined a transportation company as a driver
                            business leader based in Gary, Indiana, and in 2014 moved into his current role with the same
                            company, as a sales operations manager based in Chicago. In 2016, he received his Certified Supply
                            Chain Professional (CSCP) certification from APICS, the association for supply chain management.</p>


                        <p>Originally from Michigan, Justin enjoys participating in outdoor activities such as running and
                            hiking in his free time, as well as cooking and exploring Chicago with his girlfriend, Lindsey, and
                            10-year-old Husky, Link. He also enjoys following auto racing — specifically, rally racing and the
                            World Endurance Championship — and playing the occasional video game on those rainy days. Coding and
                            development is a passion of Justin’s, and he looks forward to applying his knowledge
                            in an exciting, evolving industry. </p>



                    </div>
                </div>
            </div>
        );
    };
};

export default About;