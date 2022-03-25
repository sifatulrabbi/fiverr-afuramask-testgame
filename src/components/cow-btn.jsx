import React from "react";
import { btn } from "../assets";

export function CowBtn({ onClick, delay }) {
    function handleClick() {
        if (onClick) onClick();
    }

    return (
        <button
            onClick={handleClick}
            className="cow-btn"
            style={{ animationDelay: `${delay}s` }}
        >
            <img src={btn} alt="Cow button" />
        </button>
    );
}
