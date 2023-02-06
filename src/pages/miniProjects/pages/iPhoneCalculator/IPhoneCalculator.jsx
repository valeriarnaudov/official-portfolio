/* eslint-disable no-eval */
import React, { useState } from "react";
import "./iPhoneCalculator.css";

function IPhoneCalculator() {
    const [currentOperations, setCurrentOperations] = useState("");
    const [result, setResult] = useState("");

    const handleClick = (value) => {
        setCurrentOperations(currentOperations + value);
    };

    const handleEqual = () => {
        try {
            setResult(eval(currentOperations));
            setCurrentOperations(eval(currentOperations));
        } catch (error) {
            setResult("Error");
        }
    };

    const handleClear = () => {
        setCurrentOperations("");
        setResult("");
    };

    const handleBackSpace = () => {
        setCurrentOperations(currentOperations.slice(0, -1));
    };

    return (
        <div className="iphone-calculator">
            <div className="current-operations">{currentOperations}</div>
            <div className="result">{result}</div>
            <div className="row">
                <button
                    className="funcionality-button"
                    onClick={() => handleClear()}
                >
                    AC
                </button>
                <button
                    className="funcionality-button"
                    onClick={() => handleBackSpace()}
                >
                    ⟵
                </button>
                <button
                    className="funcionality-button"
                    onClick={() => handleClick("%")}
                >
                    %
                </button>
                <button
                    className="operator-button"
                    onClick={() => handleClick("/")}
                >
                    ÷
                </button>
            </div>
            <div className="row">
                <button
                    className="number-button"
                    onClick={() => handleClick("7")}
                >
                    7
                </button>
                <button
                    className="number-button"
                    onClick={() => handleClick("8")}
                >
                    8
                </button>
                <button
                    className="number-button"
                    onClick={() => handleClick("9")}
                >
                    9
                </button>
                <button
                    className="operator-button"
                    onClick={() => handleClick("*")}
                >
                    x
                </button>
            </div>
            <div className="row">
                <button
                    className="number-button"
                    onClick={() => handleClick("4")}
                >
                    4
                </button>
                <button
                    className="number-button"
                    onClick={() => handleClick("5")}
                >
                    5
                </button>
                <button
                    className="number-button"
                    onClick={() => handleClick("6")}
                >
                    6
                </button>
                <button
                    className="operator-button"
                    onClick={() => handleClick("-")}
                >
                    -
                </button>
            </div>
            <div className="row">
                <button
                    className="number-button"
                    onClick={() => handleClick("1")}
                >
                    1
                </button>
                <button
                    className="number-button"
                    onClick={() => handleClick("2")}
                >
                    2
                </button>
                <button
                    className="number-button"
                    onClick={() => handleClick("3")}
                >
                    3
                </button>
                <button
                    className="operator-button"
                    onClick={() => handleClick("+")}
                >
                    +
                </button>
            </div>
            <div className="row">
                <button
                    className="number-button zero-button"
                    onClick={() => handleClick("0")}
                >
                    0
                </button>
                <button
                    className="number-button"
                    onClick={() => handleClick(".")}
                >
                    .
                </button>
                <button
                    className="operator-button"
                    onClick={() => handleEqual()}
                >
                    =
                </button>
            </div>
        </div>
    );
}

export default IPhoneCalculator;
