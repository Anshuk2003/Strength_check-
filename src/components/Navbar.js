import React from 'react';
import { NavLink } from 'react-router-dom';
import "../Css/navbar.css"
const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName="navbar-active">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/PassValidator" activeClassName="navbar-active">Password Checker</NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeClassName="navbar-active">About Us</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeClassName="navbar-active">Contact Us</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
