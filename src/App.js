import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Portfolio from "./pages/portfolio/Porfolio";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Portfolio />} />
            </Routes>
        </Router>
    );
}

export default App;
