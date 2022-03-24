import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Options, Question } from "./pages";

export default function App() {
    return (
        <div className="container-fluid p-0 app">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/options" element={<Options />} />
                <Route path="/ques" element={<Question />} />
            </Routes>
        </div>
    );
}
