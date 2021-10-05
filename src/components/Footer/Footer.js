import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faShare, faCode, faCopyright } from '@fortawesome/free-solid-svg-icons';
import "./Footer.css";

const Footer = () => {
    // Font Awesome Icon
    const icon = <FontAwesomeIcon icon={faAddressBook} />
    const icon2 = <FontAwesomeIcon icon={faShare} />
    const icon3 = <FontAwesomeIcon icon={faCode} />
    const icon4 = <FontAwesomeIcon icon={faCopyright} />
    return (
        // Footer Area
        <div className="footer-div">
            <h4 className="text-warning mb-3">Learn Coding Effectly</h4>
            <div className="row">
                {/* Address */}
                <div className="col-md-4">
                    <p className="text-light">{icon} Address</p>
                    <p className="text-light">Banani 1213, Dhaka, Bangladesh</p>
                </div>

                {/* Social Media Links */}
                <div className="col-md-4">
                    <p className="text-light">{icon2} Follow Us</p>
                    <a href="https://facebook.com/juniorhridoyofficial">
                        Facebook
                    </a>{" "}
                    <br />
                    <a href="https://instagram.com/ahhridoyy">Instagram</a>{" "}
                    <br />
                    <a href="https://twitter.com/ahhridoyy">Twitter</a>
                </div>
                
                {/* Programming Languages */}
                <div className="col-md-4">
                    <p className="text-light">{icon3} Languages</p>
                    <small className="text-light">Javascript</small> <br />
                    <small className="text-light">Python</small> <br />
                    <small className="text-light">Java</small> <br />
                    <small className="text-light">C</small> <br />
                </div>
            </div>
            <div>
                <small className="text-light">{icon4} 2021 All rights reserved.</small>
            </div>
        </div>
    );
};

export default Footer;
