import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename="/game/">
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
