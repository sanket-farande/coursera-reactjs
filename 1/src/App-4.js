import About from "./components/About";
import Home from "./components/Home";
import './App.css';
import { Link, Route, Routes } from "react-router-dom";

function App() {
    return (
        <div>
            <nav className="nav">
                {/* It refreshes the page
                    <a href="/" className="nav-item">Home</a>
                    <a href="/about" className="nav-item">About</a>
                */}
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/about" className="nav-item">About</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    );
}

export default App;