// filename -App.js

import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Teams from "./pages/team";
import Surveys from "./pages/surveys";
import Report from './pages/report';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/report" element={<Report />} />
                <Route path="/team" element={<Teams />} />
                <Route path="/surveys" element={<Surveys />} />
            </Routes>
        </Router>
    );
}

export default App;
