import React from 'react';
import img from '../../images/error.png'

const NotFound = () => {
    // Not Found Area
    return (
        <div className="container">
            <img className="w-50 m-5" src={img} alt="" />
            <h1 className="text-danger m-5">Page Not Found</h1>
        </div>
    );
};

export default NotFound;