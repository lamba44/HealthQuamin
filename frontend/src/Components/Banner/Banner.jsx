import React from "react";
import "./Banner.css";
import { assets } from "./../../assets/assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {
    const navigate = useNavigate();

    return (
        <div className="banner">
            {/* Left Side */}
            <div className="bannerleft">
                <div className="bannertext">
                    <p>Book Appointment</p>
                    <p className="bannertextline2">With 100+ Trusted Doctors</p>
                </div>
                <button
                    onClick={() => {
                        navigate("/login");
                        scrollTo(0, 0);
                    }}
                    className="bannerbtn"
                >
                    Create Account
                </button>
            </div>

            {/* Right Side */}
            <div className="bannerright">
                <img
                    className="bannerrightimg"
                    src={assets.appointment_img}
                    alt=""
                />
            </div>
        </div>
    );
};

export default Banner;
