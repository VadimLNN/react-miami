import "./styles/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Project from "./pages/Project";
import ForRedux from "./pages/ForRedux";
import MuiPage from "./pages/mui_page";

import ScrollToTop from "./utils/scrollToTop";

function App() {
    return (
        <div className="App">
            <Router>
                <ScrollToTop />
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/project/:id" element={<Project />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/redux" element={<ForRedux />} />
                    <Route path="/mui_components" element={<MuiPage />} />
                </Routes>

                <Footer />
            </Router>
        </div>
    );
}

export default App;
