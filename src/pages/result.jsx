import React from "react";
import { useReward } from "../contexts";
import { useNavigate } from "react-router-dom";
import { GameTitle } from "../components";

export function Result() {
    const navigate = useNavigate();
    const { reward } = useReward();

    function goHome() {
        navigate("/");
    }

    return reward ? (
        <div className="d-flex flex-column justify-content-center align-items-center page">
            <GameTitle />
            <h1 className="fw-bold text-primary">あなたの得点は？</h1>
            <div
                className="my-4 text-primary border-primary border border-2 d-flex justify-content-center align-items-center"
                style={{ width: 150, height: 150, borderRadius: "50%" }}
            >
                <span
                    className="fw-bold d-block shake"
                    style={{ fontSize: "3.5rem", marginRight: ".2rem" }}
                >
                    {reward}
                </span>
                <span className="fw-bold fs-5 text-secondary">点</span>
            </div>
            <button
                className="bg-primary btn-colored p-3 text-white fw-bold"
                onClick={goHome}
            >
                クリックして
                <br />
                ポイントゲット
            </button>
        </div>
    ) : (
        navigate("/options")
    );
}
