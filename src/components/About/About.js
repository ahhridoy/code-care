import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import img from '../../images/about.png'

const About = () => {
    // Font Awesome Icon
    const icon = <FontAwesomeIcon icon={faCode} />
    return (
        <div className="row">
            {/* About our lessons */}
            <div className="col-md-6">
                <div className="m-5">
                    <h2 className="text-warning">Our Services is the best for the beginner learners</h2>
                    <p>Programming is the process of creating a set of instructions that tell a computer how to perform a task. Programming can be done using a variety of computer programming languages, such as JavaScript, Python, and C++.</p>
                </div>

                {/* Programming Languages */}
                <div className="mt-5">
                    <h2 className="text-warning">{icon} Languages</h2>
                    <h6>Javascript</h6>
                    <h6>Python</h6>
                    <h6>Java</h6>
                    <h6>Php</h6>
                    <h6>C</h6>
                </div>
            </div>
            
            {/* About Us Images */}
            <div className="col-md-6">
                <img className="w-75" src={img} alt="" />
            </div>
        </div>
    );
};

export default About;