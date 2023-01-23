import { useContext } from "react";
import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Intro from "./components/intro/Intro";
import Journey from "./components/journey/Journey";
import NavBar from "./components/navbar/NavBar";
import ProjectList from "./components/projectList/ProjectList";
import { ThemeContext } from "./context";

function App() {
    const theme = useContext(ThemeContext);
    const lightMode = theme.state.lightMode;

    return (
        <div
            style={{
                backgroundColor: lightMode ? "white" : "#222",
                color: !lightMode && "white",
            }}
        >
            <NavBar />
            <Intro />
            <About />
            <ProjectList />
            <Journey />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
