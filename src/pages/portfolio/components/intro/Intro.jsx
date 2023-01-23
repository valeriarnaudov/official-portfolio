import "./intro.css";
import Me from "../../../../assets/img/profile.png";
import ReactTypingEffect from "react-typing-effect";

function Intro() {
    return (
        <section id="intro" className="intro">
            <div className="intro-left">
                <div className="intro-left-wrapper">
                    <h2 className="intro-intro">Hello! My name is</h2>
                    <h1 className="intro-name">Valeri Arnaudov</h1>
                    <ReactTypingEffect
                        className="intro-title-item"
                        text={[
                            "Web developer",
                            "JavaScript Developer",
                            "React Developer",
                            "HTML & CSS Developer",
                            "Angular Developer",
                        ]}
                        speed={80}
                        eraseSpeed={80}
                        eraseDelay={200}
                        typingDelay={10}
                    />
                    <p className="intro-description">
                        Always motivated to achieve the goals and never leave
                        them by half. When I enjoy doing something, I always
                        give it my all. I have always been a computer buff and
                        learned everything I needed to use them by myself.
                    </p>
                </div>
            </div>
            <div className="intro-right">
                <div className="intro-bg"></div>
                <img src={Me} alt="Profile IMG" className="intro-img" />
            </div>
        </section>
    );
}

export default Intro;
