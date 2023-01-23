import React from "react";
import Calendar from "../../../assets/img/schedule.png";
import "./list.css";

function List({ data }) {
    return (
        <>
            {data.map((item, i) => {
                if (i % 2 === 0 && i !== data.length - 1) {
                    return (
                        <div className="data" key={i}>
                            <div>
                                <div className="title-container">
                                    <img
                                        src={item.icon}
                                        alt=""
                                        className="title-icon"
                                    />
                                    <h3 className="title">{item.title}</h3>
                                </div>
                                <span className="subtitle">
                                    {item.subtitle}
                                </span>
                                <div className="time">
                                    <img
                                        src={Calendar}
                                        alt="Calendar"
                                        className="icon"
                                    />
                                    {item.time}
                                </div>
                            </div>
                            <div>
                                <span className="rounder"></span>
                                <span className="line"></span>
                            </div>
                        </div>
                    );
                } else if (i % 2 === 0 && i === data.length - 1) {
                    return (
                        <div className="data" key={i}>
                            <div>
                                <div className="title-container">
                                    <img
                                        src={item.icon}
                                        alt=""
                                        className="title-icon"
                                    />
                                    <h3 className="title">{item.title}</h3>
                                </div>
                                <span className="subtitle">
                                    {item.subtitle}
                                </span>
                                <div className="time">
                                    <img
                                        src={Calendar}
                                        alt="Calendar"
                                        className="icon"
                                    />
                                    {item.time}
                                </div>
                            </div>
                            <div>
                                <span className="rounder"></span>
                            </div>
                        </div>
                    );
                } else if (i % 2 !== 0 && i === data.length - 1) {
                    return (
                        <div className="data" key={i}>
                            <div></div>
                            <div>
                                <span className="rounder"></span>
                            </div>
                            <div>
                                <div className="title-container">
                                    <h3 className="title">{item.title}</h3>
                                    <img
                                        src={item.icon}
                                        alt=""
                                        className="title-icon"
                                    />
                                </div>
                                <span className="subtitle">
                                    {item.subtitle}
                                </span>
                                <div className="time">
                                    <img
                                        src={Calendar}
                                        alt="Calendar"
                                        className="icon"
                                    />
                                    {item.time}
                                </div>
                            </div>
                        </div>
                    );
                } else {
                    return (
                        <div className="data" key={i}>
                            <div></div>
                            <div>
                                <span className="rounder"></span>
                                <span className="line"></span>
                            </div>
                            <div>
                                <div className="title-container">
                                    <h3 className="title">{item.title}</h3>
                                    <img
                                        src={item.icon}
                                        alt=""
                                        className="title-icon"
                                    />
                                </div>
                                <span className="subtitle">
                                    {item.subtitle}
                                </span>
                                <div className="time">
                                    <img
                                        src={Calendar}
                                        alt="Calendar"
                                        className="icon"
                                    />
                                    {item.time}
                                </div>
                            </div>
                        </div>
                    );
                }
            })}
        </>
    );
}

export default List;
