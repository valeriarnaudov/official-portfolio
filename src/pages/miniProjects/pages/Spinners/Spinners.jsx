import React from "react";
import ArcSpinner from "./ArcSpinner/ArcSpinner";
import RoundedColorSpinner from "./RoundColorSpinner/RoundedColorSpinner.jsx";
import "./spinners.css";

function Spinners() {
    return (
        <div className="spinners-display">
            <ArcSpinner />
            <div className="spinners-bg">
                <RoundedColorSpinner />
            </div>
        </div>
    );
}

export default Spinners;
