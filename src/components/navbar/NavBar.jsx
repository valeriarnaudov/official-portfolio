import React, { useEffect } from "react";
import { Link } from "react-scroll";
import "./navbar.css";
import { AiOutlineMenu } from "react-icons/ai";

function NavBar() {
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY < 20) {
                document.querySelector(".navbar").classList.remove("sticky");
            } else {
                document.querySelector(".navbar").classList.add("sticky");
            }
        });
    }, []);

    const toogleMenu = () => {
        document.querySelector(".navbar .menu").classList.add("active");
        document.querySelector(".menu-btn").classList.add("active");
    }
 
    return (
        <nav className="navbar sticky">
            <div className="max-width">
                <div className="logo">
                    <Link to="intro">
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
                            duration={500}
                            delay={500}
                        >
                            Projects
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
                <div className="menu-btn" onClick={toogleMenu}><AiOutlineMenu/></div>
            </div>
        </nav>
    );
}

export default NavBar;
