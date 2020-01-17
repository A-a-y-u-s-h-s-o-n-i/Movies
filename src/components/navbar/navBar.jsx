import React from 'react';
import { NavLink,Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">MyMovies</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbar" aria-controls="navbar" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/movies">Movies</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/customer">Customers</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/rental">Rentals</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/register">Register</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default NavBar;
