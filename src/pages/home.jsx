import React from "react";
import {Container} from "react-bootstrap";

export function Home() {
    return (
        <Container className="bg-white">
            <h1>Heading</h1>
            <h3>Sub heading</h3>
            <img src="" alt="Logo" />
            <h3>Sub heading secondary</h3>
            <button>
                {">>"} Play {">>"}
            </button>
        </Container>
    );
}
