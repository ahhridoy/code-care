import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
import Language from "../Language/Language";

const HomePart2 = () => {
    const [languages, setLanguages] = useState([]);
    useEffect(() => {
        fetch("./fakedata1.json")
            .then((res) => res.json())
            .then((data) => setLanguages(data));
    }, []);
    return (
        <div className="container home-row">
            <Row xs={1} md={2} className="g-4">
                {languages.map((language) => (
                    <Language key={language.id} language={language}></Language>
                ))}
            </Row>
        </div>
    );
};

export default HomePart2;
