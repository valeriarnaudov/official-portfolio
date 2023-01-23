import React, { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import Phone from "../../../../assets/img/phone.png";
import Email from "../../../../assets/img/email.png";
import Adress from "../../../../assets/img/location.png";
import GitHub from "../../../../assets/img/github.png";
import LinkedIn from "../../../../assets/img/linkedin.png";
import Facebook from "../../../../assets/img/facebook.png";
import Instagram from "../../../../assets/img/instagram.png";
import { ThemeContext } from "../../../../context";
import Underline from "../common/Underline";

function Contact() {
    const formRef = useRef();
    const [send, setSend] = useState(false);
    const theme = useContext(ThemeContext);
    const lightMode = theme.state.lightMode;

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_valtodev",
                "valto-portfolio",
                formRef.current,
                "fh5VFy8GKLdH5OolU"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setSend(true);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <section id="contact" className="contact">
            <div className="contact-bg"></div>
            <div
                className="contact-wrapper"
                style={{
                    background: lightMode
                        ? "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(189,189,189,1) 100%)"
                        : "",
                }}
            >
                <div className="contact-left">
                    <div
                        className="title-container"
                        style={{ alignItems: "flex-start" }}
                    >
                        <h1 className="contact-title">Contact me</h1>
                        <Underline />
                    </div>
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <img src={Phone} alt="" className="contact-icon" />
                            +359 889 081 813
                        </div>
                        <div className="contact-info-item">
                            <img src={Email} alt="" className="contact-icon" />
                            valto.arnaudov@gmail.com
                        </div>
                        <div className="contact-info-item">
                            <img src={Adress} alt="" className="contact-icon" />
                            Haskovo 6300, Bulgaria
                        </div>
                        <div
                            className="title-container"
                            style={{ alignItems: "flex-start" }}
                        >
                            <h1 className="contact-title">Socials</h1>
                            <Underline />
                        </div>
                        <div className="contact-info-item">
                            <a
                                href="https://github.com/valeriarnaudov/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={GitHub}
                                    alt=""
                                    className="contact-icon"
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/valeri-arnaudov-082a77215/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={LinkedIn}
                                    alt=""
                                    className="contact-icon"
                                />
                            </a>
                            <a
                                href="https://www.facebook.com/valeriltd/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={Facebook}
                                    alt=""
                                    className="contact-icon"
                                />
                            </a>
                            <a
                                href="https://www.instagram.com/valeriltd/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={Instagram}
                                    alt="GitHub"
                                    className="contact-icon"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <p className="contact-description">
                        <b>Do you want to hear me?</b> Just contact with me.
                        I'll return an answer to your, as sooner as I see the
                        message.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input
                            style={{ background: !lightMode && "#333" }}
                            type="text"
                            placeholder="Name"
                            name="user_name"
                            required={true}
                        />
                        <input
                            style={{ background: !lightMode && "#333" }}
                            type="text"
                            placeholder="Email"
                            required={true}
                            name="user_email"
                        />
                        <input
                            style={{ background: !lightMode && "#333" }}
                            type="text"
                            placeholder="Subject"
                            required={true}
                            name="user_subject"
                        />
                        <textarea
                            style={{
                                background: !lightMode && "#333",
                                border: !lightMode && "none",
                            }}
                            rows="5"
                            placeholder="Message"
                            required={true}
                            name="message"
                            maxLength="1000"
                        ></textarea>
                        <button>Submit</button>
                        {send && (
                            <h3 className="send-message">
                                Thank you for your message!
                            </h3>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
