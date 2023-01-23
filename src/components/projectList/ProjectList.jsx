import React from "react";
import Projects from "../projects/Projects";
import "./projectList.css";
import { projects } from "../../data";

function ProjectList() {
    return (
        <section id="projects" className="lists">
            <div className="lists-text">
                <h1 className="lists-title">My projects</h1>
                <p className="lists-desc">
                    That are all my projects created by me.
                </p>
            </div>
            <div className="lists-list">
                {projects.map((item, index) => (
                    <Projects img={item.img} key={index} link={item.link} />
                ))}
            </div>
        </section>
    );
}

export default ProjectList;
