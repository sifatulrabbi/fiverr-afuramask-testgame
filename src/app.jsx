import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Options, Question, Result } from "./pages";
import { RewardProvider } from "./contexts";

export default function App() {
    return (
        <RewardProvider>
            <div className="container-fluid p-0 app">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/options" element={<Options />} />
                    <Route path="/question" element={<Question />} />
                    <Route path="/result" element={<Result />} />
                </Routes>
            </div>
        </RewardProvider>
    );
}
