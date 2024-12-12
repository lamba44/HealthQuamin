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
                onClick={() => navigate("/")}
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
                                <p onClick={() => navigate("my-profile")}>
                                    My Profile
                                </p>
                                <p onClick={() => navigate("my-appointments")}>
                                    My Appointments
                                </p>
                                <p onClick={() => setToken(false)}>Logout</p>
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
                <img
                    onClick={() => setShowMenu(true)}
                    className="navbarmobilemenuicon"
                    src={assets.menu_icon}
                    alt=""
                />
                {/* Mobile Menu */}
                <div className={`navbarmobilemenu ${showMenu ? "show" : ""}`}>
                    <div className="navbarmobilemenulogos">
                        <img
                            className="navbarmobilemenumainlogo"
                            src={assets.logo}
                            alt="Mobile Logo"
                        />
                        <img
                            className="navbarmobilemenucrossicon"
                            onClick={() => setShowMenu(false)}
                            src={assets.cross_icon}
                            alt="Close Menu"
                        />
                    </div>
                    <ul className="navbarmobileul">
                        <NavLink onClick={() => setShowMenu(false)} to="/">
                            <p className="navbarmobilelink">HOME</p>
                        </NavLink>
                        <NavLink
                            onClick={() => setShowMenu(false)}
                            to="/doctors"
                        >
                            <p className="navbarmobilelink">ALL DOCTORS</p>
                        </NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to="/about">
                            <p className="navbarmobilelink">ABOUT</p>
                        </NavLink>
                        <NavLink
                            onClick={() => setShowMenu(false)}
                            to="/contact"
                        >
                            <p className="navbarmobilelink">CONTACT</p>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
