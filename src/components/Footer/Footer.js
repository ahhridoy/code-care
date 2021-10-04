import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        // Footer Area
        <div className="footer-div">
            <h4 className="text-warning mb-3">Learn Coding Effectly</h4>
            <div className="row">
                {/* Address */}
                <div className="col-md-4">
                    <p className="text-light">Address</p>
                    <p className="text-light">Banani 1213, Dhaka, Bangladesh</p>
                </div>

                {/* Social Media Links */}
                <div className="col-md-4">
                    <p className="text-light">Follow Us</p>
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
                    <p className="text-light">Languages</p>
                    <small className="text-light">Javascript</small> <br />
                    <small className="text-light">Python</small> <br />
                    <small className="text-light">Java</small> <br />
                    <small className="text-light">C</small> <br />
                </div>
            </div>
        </div>
    );
};

export default Footer;
