import React from "react";
import { btn } from "../assets";

export function Home() {
    return (
        <div className="container-fluid p-0 my-auto bg-white w-100 py-5 d-flex flex-column justify-content-center align-items-center">
            <h1 className="fs-1 fw-bolder text-primary">ゲーム説明</h1>
            <p className="text-secondary text-center fw-bold">
                並んでる牛さんをクリックすると
                <br />
                点数がもらえるよ
            </p>
            <img
                src={btn}
                alt="Button"
                className="py-3"
                style={{ height: "20vh" }}
            />
            <button className="btn fs-5 text-center text-primary fw-bold">
                ゲーム開始
                <br />
                {">>"}スキップ{">>"}
            </button>
        </div>
    );
}
