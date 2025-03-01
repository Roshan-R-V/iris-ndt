import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
// import Services from "./components/Services.jsx";
// import Contact from "./components/Contact.jsx";

function App() {
    return (
        <Router>
            <div className="video-container">
                <video
                    src={"src/assets/final iris - Made with Clipchamp.mp4"}
                    muted
                    loop
                    autoPlay
                    className="background-video"
                ></video>
            </div>

            {/* Navbar and content wrapper */}
            <div className="content">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/*<Route path="/services" element={<Services />} />*/}
                    {/*<Route path="/contact" element={<Contact />} />*/}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
