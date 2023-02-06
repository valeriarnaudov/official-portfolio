import React from "react";
import { Link } from "react-router-dom";
import "./projectsSidebar.css";
import Logo from "../../../../assets/img/favicon.ico";
import Portrait from "../../../../assets/img/github.png";
import { pagesData } from "../../PagesData";

function ProjectsSidebar() {
    return (
        <nav className="sidebar">
            <div>
                <Link className="logo" to={"/"}>
                    <img src={Logo} alt="" />
                    <span className="name1">Valto</span>
                    <span className="name2">Dev</span>
                </Link>
            </div>
            <small className="projects-side">Projects</small>
            <ul className="list">
                {pagesData.map((page) => (
                    <li key={page.route}>
                        <Link className="item" to={`${page.route}`}>
                            {page.icon}
                            <span className="item-name">{page.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
            <hr />
            <div className="creator">
                <a
                    href={
                        "https://github.com/valeriarnaudov/official-portfolio"
                    }
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={Portrait} alt="portrait" />
                </a>
                <div>
                    <h4>Valeri Arnaudov</h4>
                </div>
            </div>
        </nav>
    );
}

export default ProjectsSidebar;
