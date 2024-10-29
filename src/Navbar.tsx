import React from "react";
import './App.css'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="nav">
            <div className="grid">
                <span><Link to={'/'}>Home</Link></span>
                <span><Link to={'/about'}>About</Link></span>
                <span><Link to={'/work'}>Experience</Link></span>
                <span><a href="https://linkedin.com/in/kristofferstenberg" target='_blank'>LinkedIn</a></span>
            </div>
        </div>
    )
}

export default Navbar;