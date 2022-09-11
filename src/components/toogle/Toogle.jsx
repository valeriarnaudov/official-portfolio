import React, { useContext } from "react";
import "./toogle.css";
import Sun from "../../assets/img/sun.png";
import Moon from "../../assets/img/moon.png";
import { ThemeContext } from "../../context";

function Toogle() {
    const theme = useContext(ThemeContext);

    const handleClick = () => {
        theme.dispatch({ type: "TOGGLE" });
    };

    return (
        <div className="toogle">
            <img src={Sun} alt="" className="toogle-icon" />
            <img src={Moon} alt="" className="toogle-icon" />
            <div
                className="toogle-button"
                onClick={handleClick}
                style={{ right: theme.state.lightMode ? 0 : 25 }}
            ></div>
        </div>
    );
}

export default Toogle;
