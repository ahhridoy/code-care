import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const activeStyle = {
        fontWeight: 'bold',
        color: 'golden'
    }
    return (
        // Header Area
        <div className="header-div">
            <div className="row">
                {/* This sites name */}
                <div className="col-md-4">
                    <h1 className="text-warning fs-1 text">Code Care!</h1>
                </div>

                {/* Navigation bar */}
                <div className="col-md-8">
                    <NavLink activeStyle={activeStyle} className="text-light fs-3 text" to="/home">
                        <span className="me-4">Home</span>
                    </NavLink>
                    <NavLink activeStyle={activeStyle} className="text-light fs-3 text" to="/services">
                        <span className="me-4">Services</span>
                    </NavLink>
                    <NavLink activeStyle={activeStyle} className="text-light fs-3 text" to="/contact">
                        <span className="me-4">Contact Us</span>
                    </NavLink>
                    <NavLink activeStyle={activeStyle} className="text-light fs-3 text" to="/about">
                        <span>About</span>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;
