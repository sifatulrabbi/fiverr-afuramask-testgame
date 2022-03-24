import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";

export default function App() {
    return (
        <div className="container-fluid p-0 app">
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
}
