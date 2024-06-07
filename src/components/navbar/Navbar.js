import { NavLink } from "react-router-dom";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import "./style.css";

function Navbar() {
    const activeLink = "nav-list__link nav-list__link--active";
    const normalLink = "nav-list__link";

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to="/" className="logo">
                        <strong>Freelancer</strong> portfolio
                    </NavLink>

                    <BtnDarkMode />

                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink to="/" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/projects" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/contacts" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                                Contacts
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/redux" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                                ForRedux
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/mui_components" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                                Mui
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/reduxToolkit" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                                ReduxTK
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
