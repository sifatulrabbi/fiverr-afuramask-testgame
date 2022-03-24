import React from "react";
import { Routes, Route } from "react-router-dom";
import { bg } from "./assets";
import { Home } from "./pages";

export default function App() {
    return (
        <div className="container-fluid p-0 app">
            <img src={bg} alt="background" className="bg" />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
}
