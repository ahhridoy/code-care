import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faShare, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import img from "../../images/contact-us.png";

const Contact = () => {
    // Font Awesome Icon
    const icon = <FontAwesomeIcon icon={faAddressBook} />
    const icon2 = <FontAwesomeIcon icon={faPhoneAlt} />
    const icon3 = <FontAwesomeIcon icon={faShare} />
    return (
        // Contacts area
        <div className="row">
            <div className="col-md-6 mt-5">
                {/* Address */}
                <div className="mt-5">
                    <h2 className="text-warning">{icon} Address</h2>
                    <h6>Banani 1213, Dhaka, Bangladesh</h6>
                </div>

                {/* Phone Number */}
                <div className="mt-5">
                    <h2 className="text-warning">{icon2} Phone</h2>
                    <h6>01318183476</h6>
                </div>
                
                {/* Social Media Links */}
                <div className="mt-5">
                    <h2 className="text-warning">{icon3} Follow Us</h2>
                    <a href="https://facebook.com/juniorhridoyofficial">
                        Facebook
                    </a>{" "}
                    <br />
                    <a href="https://instagram.com/ahhridoyy">Instagram</a>{" "}
                    <br />
                    <a href="https://twitter.com/ahhridoyy">Twitter</a>
                </div>
            </div>

            {/* Contact Us Images */}
            <div className="col-md-6">
                <img className="w-100" src={img} alt="" />
            </div>
        </div>
    );
};

export default Contact;
