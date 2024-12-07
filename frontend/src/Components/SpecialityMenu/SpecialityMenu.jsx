import React from "react";
import { specialityData } from "./../../assets/assets";
import { Link } from "react-router-dom";
import "./SpecialityMenu.css";

const SpecialityMenu = () => {
    return (
        <div className="speciality" id="speciality">
            <h1 className="specialityheading">Find By Speciality</h1>
            <p className="specialitydesc">
                Simply browse through our extensive list of trusted doctors,
                schedule your appointment hassle free.
            </p>
            <div className="specialitylist">
                {specialityData.map((item, index) => (
                    <Link
                        onClick={() => scrollTo(0, 0)}
                        className="specialitylink"
                        key={index}
                        to={`/doctors/${item.speciality}`}
                    >
                        <img
                            className="specialitylistimg"
                            src={item.image}
                            alt=""
                        />
                        <p>{item.speciality}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SpecialityMenu;
