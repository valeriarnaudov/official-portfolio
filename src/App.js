import { useContext } from "react";
import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProjectList from "./components/projectList/ProjectList";
import Toogle from "./components/toogle/Toogle";
import { ThemeContext } from "./context";

function App() {
    const theme = useContext(ThemeContext);
    const lightMode = theme.state.lightMode;

    return (
        <div
            style={{
                backgroundColor: lightMode ? "white" : "black",
                color: !lightMode && "white",
            }}
        >
            <Toogle />
            <Intro />
            <About />
            <ProjectList />
            <Contact />
        </div>
    );
}

export default App;
