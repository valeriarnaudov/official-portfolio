import "./about.css";
import Card from "../../assets/img/card.png";

function About() {
    return (
        <div className="about">
            <div className="about-left">
                <div className="about-card bg"></div>
                <div className="about-card">
                    <img src={Card} alt="CardImage" className="card-img" />
                </div>
            </div>
            <div className="about-right">
                <h1 className="about-title">About me</h1>
                <p className="about-sub">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet, minima.
                </p>
                <p className="about-desc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Iste voluptas non alias temporibus eligendi veniam
                    asperiores fuga, quibusdam repudiandae molestiae distinctio,
                    nobis unde sequi, porro quo cumque voluptatum nulla
                    voluptatibus.
                </p>
            </div>
        </div>
    );
}

export default About;
