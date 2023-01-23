import React, { useState } from "react";
import "./journey.css";
import EducationIcon from "../../assets/img/mortarboard.png";
import WorkIcon from "../../assets/img/suitcase.png";
import { education, work } from "../../data";
import List from "./list/List";

function Journey() {
    const [active, setActive] = useState("work");

    const handleJourney = (state) => {
        if (state === "work") {
            setActive("work");
        } else if (state === "education") {
            setActive("education");
        }
    };

    return (
        <section id="journey" className="journey">
            <div className="journey-title">
                <h1 className="title">My Journey</h1>
                <span className="subtitle">
                    Qualification and work experience
                </span>
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
