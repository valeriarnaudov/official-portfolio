import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./navbar.css";

function NavBar() {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY < 20) {
                setSticky(false);
            } else {
                setSticky(true);
            }
        });
    }, []);

    return (
        <nav className={`navbar ${sticky ? "sticky" : ""}`}>
            <div className="max-width">
                <div className="logo">
                    <Link
                        to="intro"
                        spy={true}
                        smooth={true}
                        duration={500}
                        delay={500}
                    >
                        VaLto<span>Dev</span>
                    </Link>
                </div>
                <ul className="menu">
                    <li>
                        <Link
                            to="intro"
                            className="menu-btn"
                            offset={-73}
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            duration={500}
                            delay={500}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="about"
                            className="menu-btn"
                            activeClass="active"
                            spy={true}
                            offset={-73}
                            smooth={true}
                            duration={500}
                            delay={500}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="projects"
                            className="menu-btn"
                            activeClass="active"
                            spy={true}
                            offset={-73}
                            smooth={true}
                            duration={1000}
                            delay={500}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="journey"
                            className="menu-btn"
                            activeClass="active"
                            spy={true}
                            offset={-73}
                            smooth={true}
                            duration={1000}
                            delay={500}
                        >
                            Journey
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="contact"
                            className="menu-btn"
                            activeClass="active"
                            spy={true}
                            offset={-73}
                            smooth={true}
                            duration={500}
                            delay={500}
                        >
                            Contanct
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
