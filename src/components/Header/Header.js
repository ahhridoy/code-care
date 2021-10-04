import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <div className="header-div">
            <div className="row">
                <div className="col-md-4">
                    <h1 className="text-warning fs-1 text">Code Care!</h1>
                </div>
                <div className="col-md-8">
                    <NavLink className="text-light fs-3 text" to="/home">
                        <span className="me-4">Home</span>
                    </NavLink>
                    <NavLink className="text-light fs-3 text" to="/services">
                        <span className="me-4">Services</span>
                    </NavLink>
                    <NavLink className="text-light fs-3 text" to="/contact">
                        <span className="me-4">Contact Us</span>
                    </NavLink>
                    <NavLink className="text-light fs-3 text" to="/about">
                        <span>About</span>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;
