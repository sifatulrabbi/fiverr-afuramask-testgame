import React from "react";
import { GameTitle, CowBtn } from "../components";

export function Question() {
    return (
        <div className="container px-3 d-flex flex-column justify-content-center align-items-center">
            <GameTitle />
            <h1 className="fw-bolder text-primary mb-4">あなたの得点は？</h1>
            <CowBtn />
        </div>
    );
}
