import React from "react";
import { GameTitle, CowBtn } from "../components";

export function Options() {
    return (
        <div className="container px-3 d-flex flex-column justify-content-center align-items-center page">
            <GameTitle />
            <div
                className="d-flex flex-wrap justify-content-center align-items-center"
                style={{ maxWidth: "330px" }}
            >
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <CowBtn delay={item / 3} />
                ))}
            </div>
            <h6 className="fw-bolder mt-4 mb-3">
                好きな牛さんを選んで
                <span className="text-primary">クリック</span>
            </h6>
            <small className="text-secondary fw-bold">
                <small>注意】戻るを操作するとゲームが終了してしまいます</small>
            </small>
        </div>
    );
}
