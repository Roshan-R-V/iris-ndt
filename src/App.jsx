import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";

function App() {
    return (
        <Router>
            <div className="video-container position-relative">
                <video
                    src={"src/assets/iris_video.mp4"}
                    muted
                    loop
                    autoPlay
                    className="background-video w-100 h-100 position-absolute top-0 start-0 object-fit-cover"
                ></video>
            </div>

            <div className="content position-relative vh-100 bg-black text-white">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
