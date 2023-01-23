import React, { useContext, useState } from "react";
import "./journey.css";
import EducationIcon from "../../../../assets/img/mortarboard.png";
import WorkIcon from "../../../../assets/img/suitcase.png";
import { education, work } from "../../data/data";
import List from "./list/List";
import { ThemeContext } from "../../../../context";
import Underline from "../common/Underline";

function Journey() {
    const theme = useContext(ThemeContext);
    const themeStyle = theme.state.lightMode;
    const [active, setActive] = useState("work");

    const handleJourney = (state) => {
        if (state === "work") {
            setActive("work");
        } else if (state === "education") {
            setActive("education");
        }
    };

    return (
        <section
            id="journey"
            className="journey"
            style={{
                background: themeStyle
                    ? "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(189,189,189,1) 100%)"
                    : "",
            }}
        >
            <div className="journey-title">
                <div className="title-container">
                    <h1 className="title">My Journey</h1>
                    <Underline />
                </div>
                <p className="subtitle">Qualification and work experience</p>
            </div>
            <div className="journey-container">
                <div className="journey-tabs">
                    <div
                        className="journey-btn education"
                        onClick={() => handleJourney("education")}
                    >
                        <img
                            src={EducationIcon}
                            alt="Education icon"
                            className="icon"
                        />
                        Education
                    </div>
                    <div className="separate-line"></div>
                    <div
                        className="journey-btn"
                        onClick={() => handleJourney("work")}
                    >
                        <img src={WorkIcon} alt="Work icon" className="icon" />
                        Work
                    </div>
                </div>
            </div>
            <div className="journey-data">
                {active === "education" && <List data={education} />}
                {active === "work" && <List data={work} />}
            </div>
            <div className="journey-data "></div>
        </section>
    );
}

export default Journey;
