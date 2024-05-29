import "./styles/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Project from "./pages/Project";

import ScrollToTop from "./utils/scrollToTop";
import { useDispatch, useSelector } from "react-redux";

function App() {
    const dispatch = useDispatch();
    const cash = useSelector((state) => state.cash.cash);

    const addCash = (cash) => {
        dispatch({ type: "ADD_CASH", payload: cash });
    };
    const getCash = (cash) => {
        dispatch({ type: "GET_CASH", payload: cash });
    };

    return (
        <div className="App">
            <Router>
                <ScrollToTop />
                <Navbar />
                <div>
                    <div style={{ fontSize: "3rem" }}>{cash}</div>
                    <div style={{ display: "flex" }}>
                        <button
                            onClick={() => {
                                addCash(Number(prompt()));
                            }}
                        >
                            {" "}
                            Пополнить счёт{" "}
                        </button>
                        <button
                            onClick={() => {
                                getCash(prompt());
                            }}
                        >
                            {" "}
                            Снять со счёта{" "}
                        </button>
                    </div>
                </div>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/project/:id" element={<Project />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>

                <Footer />
            </Router>
        </div>
    );
}

export default App;
