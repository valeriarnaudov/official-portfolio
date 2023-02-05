import React from "react";
import { Route, Routes } from "react-router-dom";
import ProjectsSidebar from "./components/sidebar/ProjectsSidebar";
import "./miniProjects.css";
import WeatherApp from "./pages/WeatherApp/WeatherApp";

function MiniProjects() {
    return (
        <div className="mp-screen">
            <ProjectsSidebar />
            <section className="full-screen">
                <Routes>
                    <Route path="/calculators" />
                    <Route path="weather-app" element={<WeatherApp />} />
                </Routes>
            </section>
        </div>
    );
}

export default MiniProjects;
