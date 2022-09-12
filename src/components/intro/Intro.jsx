import "./intro.css";
import Me from "../../assets/img/profile.png";

function Intro() {
    return (
        <section id="intro" className="intro">
            <div className="intro-left">
                <div className="intro-left-wrapper">
                    <h2 className="intro-intro">Hello! My name is</h2>
                    <h1 className="intro-name">Valeri Arnaudov</h1>
                    <div className="intro-title">
                        <div className="intro-title-wrapper">
                            <div className="intro-title-item">
                                Web Developer
                            </div>
                            <div className="intro-title-item">
                                With JavaScript
                            </div>
                            <div className="intro-title-item">React</div>
                            <div className="intro-title-item">HTML</div>
                            <div className="intro-title-item">CSS</div>
                        </div>
                    </div>
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
