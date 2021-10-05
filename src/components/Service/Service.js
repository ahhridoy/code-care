import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Card, Col } from "react-bootstrap";

const Service = (props) => {
    // Destructuring
    const { name, role, lesson, img } = props.service;
    // Font Awesome Icon
    const icon = <FontAwesomeIcon icon={faArrowRight} />
    return (
        <Col>
        {/* Service cards */}
            <Card className="bg-light">
                <Card.Body>
                    <Card.Title>
                        <h1>{name}</h1>
                    </Card.Title>
                    <Card.Text>
                        <h6 className="text-warning">Lesson Type: {role}</h6>
                        <p>Total Lessons: {lesson}</p>
                    </Card.Text>
                </Card.Body>
                <Card.Img variant="top" className="w-50 mx-auto" src={img} />
                <button className="btn btn-warning mt-3">Get Lesson {icon}</button>
            </Card>
        </Col>
    );
};

export default Service;
