import React from "react";
import { btn } from "../assets";

export function CowBtn({ onClick }) {
    function handleClick() {
        if (onClick) onClick();
    }

    return (
        <button onClick={handleClick} className="cow-btn">
            <img src={btn} alt="Cow button" />
        </button>
    );
}
