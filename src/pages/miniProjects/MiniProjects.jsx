import React from "react";
import { Route, Routes } from "react-router-dom";
import ProjectsSidebar from "./components/sidebar/ProjectsSidebar";
import "./miniProjects.css";
import { pagesData } from "./PagesData";

function MiniProjects() {
    return (
        <div className="mp-screen">
            <ProjectsSidebar />
            <section className="full-screen">
                <Routes>
                    {pagesData.map((page) => (
                        <Route path={page.route} element={page.element} />
                    ))}
                </Routes>
            </section>
        </div>
    );
}

export default MiniProjects;
