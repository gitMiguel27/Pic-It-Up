import React from "react";
import { NavLink } from 'react-router-dom';
import Typical from 'react-typical';
import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <div className='logo-container'>
                <p className="typical-logo">
                    <strong>Pic-It-Up</strong>
                </p>
                <p className="typical-logo">
                    <Typical
                        loop={1}
                        wrapper="b"
                        steps={[
                            'In Queens',
                            1000,
                            'Coming Soon: Manhattan',
                            1000,
                            'Coming Soon: Brooklyn',
                            1000,
                            'In Queens',
                            1000
                        ]}
                    />
                </p>
            </div>
            <div className= "navbar-links">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/challenges">Challenges</NavLink>
                <NavLink to="/pic-it-up-101">Pic-It-Up 101</NavLink>
                <NavLink to="/feed">Feed</NavLink>
                <NavLink to="/leaderboard">Leaderboard</NavLink>
                <NavLink to="/login">Login</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;