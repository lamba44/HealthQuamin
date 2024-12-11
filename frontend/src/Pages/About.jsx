import React from "react";
import "./Styling/About.css";
import { assets } from "./../assets/assets";

const About = () => {
    return (
        <div>
            <div className="aboutheading">
                <p>ABOUT US</p>
            </div>
            <div className="aboutus">
                <img className="aboutimg" src={assets.about_image} alt="" />
                <div className="aboutdesc">
                    <p>
                        Welcome to Quamin Health, your trusted partner in
                        managing your healthcare needs conveniently and
                        efficiently. At Quamin Health, we understand the
                        challenges individuals face when it comes to scheduling
                        doctor appointments and managing their health records.
                    </p>
                    <p>
                        Quamin Health is committed to excellence in healthcare
                        technology. We continuously strive to enhance our
                        platform, integrating the latest advancements to improve
                        user experience and deliver superior service. Whether
                        you're booking your first appointment or managing
                        ongoing care, Prescripto is here to support you every
                        step of the way.
                    </p>
                    <b className="aboutbold">Our Vision</b>
                    <p>
                        Our vision at Quamin Health is to create a seamless
                        healthcare experience for every user. We aim to bridge
                        the gap between patients and healthcare providers,
                        making it easier for you to access the care you need,
                        when you need it.
                    </p>
                </div>
            </div>
            <div className="aboutwhyus">
                <p className="aboutbold">WHY CHOOSE US</p>
            </div>
            <div className="aboutquals">
                <div className="qual">
                    <b>EFFICIENCY</b>
                    <p>
                        Streamlined appointment scheduling that fits into your
                        busy lifestyle.
                    </p>
                </div>
                <div className="qual">
                    <b>CONVENIENCE</b>
                    <p>
                        Access to a network of trusted healthcare professionals
                        in your area.
                    </p>
                </div>
                <div className="qual">
                    <b>PERSONALIZATION</b>
                    <p>
                        Tailored recommendations and reminders to help you stay
                        on top of your health.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
