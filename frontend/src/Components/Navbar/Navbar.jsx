import React, { useState } from "react";
import { assets } from "./../../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);

    return (
        <div className="navbar">
            <img
                className="navbarlogo"
                src={assets.logo}
                alt="Quamin Health Logo"
            />
            <ul className="navbarul">
                <NavLink to="/">
                    <li>HOME</li>
                    <hr />
                </NavLink>
                <NavLink to="/doctors">
                    <li>ALL DOCTORS</li>
                    <hr />
                </NavLink>
                <NavLink to="/about">
                    <li>ABOUT</li>
                    <hr />
                </NavLink>
                <NavLink to="/contact">
                    <li>CONTACT</li>
                    <hr />
                </NavLink>
            </ul>
            <div className="navbarbtncontainer">
                {token ? (
                    <div className="navbarprofile group">
                        <img
                            className="navbarpp"
                            src={assets.profile_pic}
                            alt="Profile Picture"
                        />
                        <img
                            className="navbardropdown"
                            src={assets.dropdown_icon}
                            alt=""
                        />
                        <div className="navbardropdownmenu">
                            <div className="navbardropdownmenuitems">
                                <p>My Profile</p>
                                <p>My Appointments</p>
                                <p>Logout</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <button
                        onClick={() => navigate("/login")}
                        className="navbarbtn"
                    >
                        Create Account
                    </button>
                )}
            </div>
        </div>
    );
};

export default Navbar;
