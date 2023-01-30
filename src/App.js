import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Error from "./pages/404/Error";
import Portfolio from "./pages/portfolio/Porfolio";
import MiniProjects from './pages/miniProjects/MiniProjects'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Portfolio />} />
                <Route path="/mini-projects" element={<MiniProjects />}/>
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
}

export default App;
