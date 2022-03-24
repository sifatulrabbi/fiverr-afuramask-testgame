import React from "react";
import {Routes, Route} from "react-router-dom";
import {Home} from "./pages";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route
                path="/options/*"
                element={
                    <Routes>
                        <Route path="" />
                    </Routes>
                }
            />
        </Routes>
    );
}

export default App;
