import React from "react";
import { GameTitle, CowBtn } from "../components";
import { useReward } from "../contexts";
import { useNavigate } from "react-router-dom";

export function Options() {
    const { updateReward } = useReward();
    const navigate = useNavigate();

    function handleClick(num) {
        return function () {
            const val = num;
            updateReward(val);
            navigate("/question");
        };
    }

    return (
        <div className="page">
            <GameTitle />
            <div
                className="d-flex flex-wrap justify-content-center align-items-center"
                style={{ maxWidth: "330px" }}
            >
                {[10, 5, 5, 5, 5, 1].map((item, index) => (
                    <CowBtn delay={index / 3} onClick={handleClick(item)} />
                ))}
            </div>
            <h6 className="fw-bold mt-4 mb-3">
                好きな牛さんを選んで{" "}
                <span className="text-primary">クリック</span>
            </h6>
            <small className="text-secondary fw-bold">
                <small>注意】戻るを操作するとゲームが終了してしまいます</small>
            </small>
        </div>
    );
}
