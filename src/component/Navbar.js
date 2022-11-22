import React from "react";
import logo from "../images/logo192.png"
const Navbar = () => (
    <header>
        <nav className="nav">
            <img src={logo} alt="reactlogo" className="nav-logo"/>
            <h3 className="nav-logo_text">ReactFacts</h3>
            <h4 className="nav-title">
                React Course - Project 1
            </h4>
        </nav>
    </header>
)

export default Navbar