import React, { useContext } from "react";
import Projects from "./projects/Projects";
import "./projectList.css";
import { projects } from "../../data/data";
import { ThemeContext } from "../../../../context";
import Underline from "../common/Underline";

function ProjectList() {
    const theme = useContext(ThemeContext);
    const themeStyle = theme.state.lightMode;

    return (
        <section
            id="projects"
            className="lists"
            style={{
                background: themeStyle
                    ? "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(189,189,189,1) 100%)"
                    : "",
            }}
        >
            <div className="lists-text">
                <div className="title-container">
                    <h1 className="lists-title">My projects</h1>
                    <Underline />
                </div>
                <p className="lists-desc">
                    That are all my projects created by me.
                </p>
            </div>
            <div className="lists-list">
                {projects.map((item, index) => (
                    <Projects
                        img={item.img}
                        key={index}
                        link={item.link}
                        title={item.title}
                    />
                ))}
            </div>
        </section>
    );
}

export default ProjectList;
