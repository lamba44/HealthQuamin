import React from "react";
import "./Styling/Contact.css";
import { assets } from "./../assets/assets";

const Contact = () => {
    return (
        <div>
            <div className="contactheading">
                <p>CONTACT US</p>
            </div>
            <div className="contactus">
                <img className="contactimg" src={assets.contact_image} alt="" />
                <div className="contactright">
                    <p className="contactsubhead">OUR OFFICE</p>
                    <p className="contacttext">
                        00000 Willms Station <br /> Suite 000, Washington, USA
                    </p>
                    <p className="contacttext">
                        Tel: (000) 000-0000 <br />
                        Email: blankemail@email.com
                    </p>
                    <p className="contactsubhead">CAREERS AT QUAMIN</p>
                    <p className="contacttext">
                        Learn more about our teams and job openings.
                    </p>
                    <button className="contactbtn">Explore Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;
