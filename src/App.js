import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Error from "./pages/404/Error";
import Portfolio from "./pages/portfolio/Porfolio";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Portfolio />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
}

export default App;
