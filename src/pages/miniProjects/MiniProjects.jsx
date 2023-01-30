import React from "react";
import { Route, Routes } from "react-router-dom";
import ProjectsSidebar from "./components/sidebar/ProjectsSidebar";

function MiniProjects() {
    return (
        <>
            <ProjectsSidebar />
            <Routes>
                <Route path={"/mini-projects/calculators"} />
            </Routes>
        </>
    );
}

export default MiniProjects;
