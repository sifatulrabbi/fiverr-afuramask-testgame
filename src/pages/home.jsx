import React from "react";

export function Home() {
    return (
        <div className="container container-sm d-flex flex-column justify-content-center align-items-center">
            <h1 className="fs-1 fw-bolder">ゲーム説明</h1>
            <h4 className="text-secondary text-center">
                並んでる牛さんをクリックすると
                <br />
                点数がもらえるよ
            </h4>
        </div>
    );
}
