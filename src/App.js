import "./styles/main.css";

import vk from "./img/icons/vk.svg";
import twitter from "./img/icons/twitter.svg";
import linkedIn from "./img/icons/linkedIn.svg";
import instagram from "./img/icons/instagram.svg";
import gitHub from "./img/icons/gitHub.svg";
import gitHub_black from "./img/icons/gitHub-black.svg";

import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className="App">
            <Navbar />

            <Header />

            <main className="section">
                <div className="container">
                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Frontend</h2>
                            <p>
                                JavaScript, TypeScript, ReactJS, Angular, Redux,
                                HTML, CSS, NPM, BootStrap, MaterialUI, Yarn,
                                TailwindCSS, StyledComponents
                            </p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Backend</h2>
                            <p>NodeJS, MySQL, MongoDB, PHP, Laravel</p>
                        </li>
                    </ul>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default App;
