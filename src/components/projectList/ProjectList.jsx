import React from "react";
import Projects from "../projects/Projects";
import "./projectList.css";
import { projects } from "../../data";

function ProjectList() {
    return (
        <div className="lists">
            <div className="lists-text">
                <h1 className="lists-title">My projects</h1>
                <p className="lists-desc">
                    That are all my projects created by me.
                </p>
            </div>
            <div className="lists-list">
                {projects.map((item) => (
                    <Projects img={item.img} key={item.id} link={item.link}/>
                ))}
            </div>
        </div>
    );
}

export default ProjectList;
