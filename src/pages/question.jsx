import React from "react";
import { GameTitle, CowBtn } from "../components";
import { useNavigate } from "react-router-dom";

export function Question() {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/result");
    }

    return (
        <div className="container px-3 d-flex flex-column justify-content-center align-items-center page">
            <GameTitle />
            <h1 className="fw-bold text-primary mb-4">あなたの得点は？</h1>
            <CowBtn onClick={handleClick} />
        </div>
    );
}
