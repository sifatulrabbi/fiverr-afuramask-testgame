import React from "react";
import { CowBtn, GameTitle } from "../components";

export function Home() {
    return (
        <div className="container-fluid p-0 my-auto bg-white w-100 py-5 d-flex flex-column justify-content-center align-items-center">
            <GameTitle />
            <h1 className="fs-1 fw-bolder text-primary">ゲーム説明</h1>
            <p className="text-secondary text-center fw-bold">
                並んでる牛さんをクリックすると
                <br />
                点数がもらえるよ
            </p>
            <CowBtn />
            <button className="btn fs-5 text-center text-primary fw-bold game-btn">
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
