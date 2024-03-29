import React from "react";
import { CowBtn, GameTitle } from "../components";
import { useNavigate } from "react-router-dom";

export function Home() {
    const navigate = useNavigate();

    function gotoOptions() {
        navigate("/options");
    }

    return (
        <div className="page">
            <GameTitle />
            <h1 className="fs-1 fw-bold text-primary">ゲーム説明</h1>
            <p className="text-secondary fw-bold text-center">
                並んでる牛さんをクリックすると
                <br />
                点数がもらえるよ
            </p>
            <CowBtn onClick={gotoOptions} />
            <button
                className="btn fs-5 text-center text-primary game-btn fw-bold"
                onClick={gotoOptions}
            >
                ゲーム開始
                <br />
                <span className="transition" style={{ fontSize: "1.4rem" }}>
                    {">>"}
                </span>{" "}
                スキップ{" "}
                <span className="transition" style={{ fontSize: "1.4rem" }}>
                    {">>"}
                </span>
            </button>
        </div>
    );
}
