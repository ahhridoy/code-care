import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
    // state
    const [services, setServices] = useState([]);

    // useEffect for dynamically load data
    useEffect(() => {
        fetch("./fakedata2.json")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
    return (
        // Services row
        <div className="container home-row">
            <Row xs={1} md={3} className="g-4">
                {services.map((service) => (
                    <Service key={service.id} service={service}></Service>
                ))}
            </Row>
        </div>
    );
};

export default Services;
