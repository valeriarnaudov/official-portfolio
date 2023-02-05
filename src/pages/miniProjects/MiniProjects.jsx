import React from "react";
import { Route, Routes } from "react-router-dom";
import ProjectsSidebar from "./components/sidebar/ProjectsSidebar";
import "./miniProjects.css";

function MiniProjects() {
    return (
        <div className="mp-screen">
            <ProjectsSidebar />
            <Routes>
                <Route path={"/mini-projects/calculators"} />
            </Routes>
        </div>
    );
}

export default MiniProjects;
