import "./intro.css";
import Me from "../../assets/img/profile.png"

function Intro() {
    return (
        <div className="intro">
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
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Tempore esse, debitis nam tenetur exercitationem
                        facilis molestiae velit deserunt quaerat fugit. Corrupti
                        necessitatibus repellat voluptate dignissimos

                    </p>
                </div>
            </div>
            <div className="intro-right">
                <div className="intro-bg"></div>
                <img src={Me} alt="Profile IMG" className="intro-img" />
            </div>
        </div>
    );
}

export default Intro;
