import React from "react";
import "./Footer.css";
import { assets } from "./../../assets/assets";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footercontainer">
                {/* Left Section */}
                <div>
                    <img className="footerimg" src={assets.logo} alt="" />
                    <p className="footerdesc">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Culpa dolorem vitae delectus ut, facere suscipit
                        tempora voluptatibus. Reprehenderit quidem illum
                        voluptatibus quaerat vel fugit libero consequuntur,
                        saepe fuga consequatur adipisci!
                    </p>
                </div>

                {/* Center Section */}
                <div>
                    <p className="footerhead">COMPANY</p>
                    <ul className="footerlist">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                {/* Right Section */}
                <div>
                    <p className="footerhead">GET IN TOUCH</p>
                    <ul className="footerlist">
                        <li>+91 999 8888 999</li>
                        <li>emailidhere@email.com</li>
                    </ul>
                </div>
            </div>
            {/* Copyright Text */}
            <div>
                <hr />
                <p className="copyright">
                    Copyright 2024 @ Quamin Tech Solutions LLP - All Rights
                    Reserved
                </p>
            </div>
        </div>
    );
};

export default Footer;
