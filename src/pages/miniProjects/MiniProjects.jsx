import React from "react";
import { Route, Routes } from "react-router-dom";
import ProjectsSidebar from "./components/sidebar/ProjectsSidebar";
import "./miniProjects.css";
import IPhoneCalculator from "./pages/iPhoneCalculator/IPhoneCalculator";
import WeatherApp from "./pages/WeatherApp/WeatherApp";

function MiniProjects() {
    return (
        <div className="mp-screen">
            <ProjectsSidebar />
            <section className="full-screen">
                <Routes>
                    <Route
                        path="iphone-calculator"
                        element={<IPhoneCalculator />}
                    />
                    <Route path="weather-app" element={<WeatherApp />} />
                </Routes>
            </section>
        </div>
    );
}

export default MiniProjects;
