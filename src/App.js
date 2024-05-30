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
import {
    addCustomerAction,
    remuveCustomerAction,
} from "./store/customerReduser";
import { addCashAction, getCashAction } from "./store/cashReduser";

function App() {
    const dispatch = useDispatch();
    const cash = useSelector((state) => state.cash.cash);
    const customers = useSelector((state) => state.customers.customers);

    const addCash = (cash) => {
        dispatch(addCashAction(cash));
    };
    const getCash = (cash) => {
        dispatch(getCashAction(cash));
    };

    const addCastomer = (name) => {
        const customer = {
            name,
            id: Date.now(),
        };
        dispatch(addCustomerAction(customer));
    };
    const remuveCustomer = (customer) => {
        dispatch(remuveCustomerAction(customer.id));
    };

    return (
        <div className="App">
            <Router>
                <ScrollToTop />
                <Navbar />
                <div>
                    <div
                        style={{
                            fontSize: "3rem",
                            marginLeft: "10.4rem",
                            marginTop: "1rem",
                        }}
                    >
                        {cash}
                    </div>
                    <div style={{ display: "flex" }}>
                        <button
                            className="btn"
                            onClick={() => {
                                addCash(Number(prompt()));
                            }}
                        >
                            <div style={{ color: "#ffffff" }}>
                                Пополнить счёт
                            </div>
                        </button>
                        <button
                            className="btn"
                            onClick={() => {
                                getCash(prompt());
                            }}
                        >
                            <div style={{ color: "#ffffff" }}>
                                Снять со счёта
                            </div>
                        </button>

                        <button
                            className="btn"
                            onClick={() => {
                                addCastomer(prompt());
                            }}
                        >
                            <div style={{ color: "#ffffff" }}>
                                Добавить клиента
                            </div>
                        </button>

                        <div>
                            {customers.length > 0 ? (
                                <div>
                                    {customers.map((customer) => (
                                        <div
                                            style={{
                                                border: "2px solid black",
                                                padding: "4px",
                                                borderRadius: 5,
                                            }}
                                            onClick={() =>
                                                remuveCustomer(customer)
                                            }
                                        >
                                            {customer.name}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div>Клиентов нет</div>
                            )}
                        </div>
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
