import "./about.css";
import Card from "../../assets/img/card.png";

function About() {
    return (
        <section id="about" className="about">
            <div className="about-left">
                <div className="about-card bg"></div>
                <div className="about-card">
                    <img src={Card} alt="CardImage" className="card-img" />
                </div>
            </div>
            <div className="about-right">
                <h1 className="about-title">About me</h1>
                <p className="about-sub">
                    I'm Valeri, 27 years old, from Bulgaria.
                </p>
                <p className="about-desc">
                    Since I was 5 years old, I've been using computers the rest
                    of my life. I noticed, that they are my passion. I've been
                    living in Spain, a total of 12 years. There is where I
                    started learning all by myself, and after the secondary
                    school, I started to study Computer Science, but cause of
                    familly problems, I had to stop the studies and start to
                    work.
                </p>
                <p className="about-desc">
                    Now, at 26 years old, I started to study again, but this
                    time Programming. I decided to choose the JavaScript
                    technology, but this is just the beggining. I'm available to
                    give my all, to reach the max level and goals!
                </p>
                <a href="./cv/Valeri CV.pdf">Download CV</a>
            </div>
        </section>
    );
}

export default About;
