import React from "react";
import "./Header.css";
import { assets } from "./../../assets/assets";

const Header = () => {
    return (
        <div className="header">
            {/* Left Side */}
            <div className="headerleft">
                <p className="headerlefttitle">
                    Book Appointments <br /> With Trusted Doctors
                </p>
                <div className="headerleftcontent">
                    <img
                        className="headerleftimg"
                        src={assets.group_profiles}
                        alt=""
                    />
                    <p>
                        Simply browse through our extensive list of trusted
                        doctors, <br className="brtagheaderleft" /> schedule
                        your appointments hassle free
                    </p>
                </div>
                <a href="#speciality" className="headerleftbtn">
                    Book Appointment
                    <img
                        className="headerbtnarrow"
                        src={assets.arrow_icon}
                        alt=""
                    />
                </a>
            </div>

            {/* Right Side */}
            <div className="headerright">
                <img
                    className="headerrightimg"
                    src={assets.header_img}
                    alt=""
                />
            </div>
        </div>
    );
};

export default Header;
