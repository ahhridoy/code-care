import React from "react";
import { Card, Col } from "react-bootstrap";

const Service = (props) => {
    // Destructuring
    const { name, role, lesson, img } = props.service;
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
                <button className="btn btn-warning mt-3">Get Lesson</button>
            </Card>
        </Col>
    );
};

export default Service;
