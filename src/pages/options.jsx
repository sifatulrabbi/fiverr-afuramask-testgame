import React from "react";
import { GameTitle, CowBtn } from "../components";

export function Options() {
    return (
        <div className="container px-3 d-flex flex-column justify-content-center align-items-center">
            <GameTitle />
            <div
                className="d-flex flex-wrap justify-content-center align-items-center"
                style={{ maxWidth: "330px" }}
            >
                <CowBtn />
                <CowBtn />
                <CowBtn />
                <CowBtn />
                <CowBtn />
                <CowBtn />
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
