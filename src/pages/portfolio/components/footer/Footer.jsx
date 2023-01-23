import React, { useContext } from "react";
import { ThemeContext } from "../../../../context";
import "./footer.css";
function Footer() {
    const theme = useContext(ThemeContext);
    const themeStyle = theme.state.lightMode;

    return (
        <footer
            style={{
                background: themeStyle ? "rgba(189,189,189,1)" : "",
            }}
        >
            <span
                style={{
                    color: themeStyle ? "black" : "",
                }}
            >
                Created By <a href="/">Valeri Arnaudov</a> | ©2023 All rights
                reserved
            </span>
        </footer>
    );
}

export default Footer;
