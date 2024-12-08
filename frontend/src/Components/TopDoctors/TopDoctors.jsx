import React, { useContext } from "react";
import "./TopDoctors.css";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";

const TopDoctors = () => {
    const navigate = useNavigate();
    const { doctors } = useContext(AppContext);

    return (
        <div className="topdocs">
            <h1 className="topdocsheading">Top Doctors to Book</h1>
            <p className="topdocsdesc">
                Simply browse through our extensive list of trusted doctors.
            </p>
            <div className="topdocsgrid">
                {doctors.slice(0, 10).map((item, index) => (
                    <div
                        onClick={() => navigate(`/appointment/${item._id}`)}
                        className="topdocsgriditem"
                        key={index}
                    >
                        <img
                            className="topdocsgriditemimg"
                            src={item.image}
                            alt=""
                        />
                        <div className="topdocsgriditemcontent">
                            <div className="topdocsgriditemav">
                                <p className="greendot"></p>
                                <p>Available</p>
                            </div>
                            <p className="topdocname">{item.name}</p>
                            <p className="topdocspec">{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button
                onClick={() => {
                    navigate("/doctors");
                    scrollTo(0, 0);
                }}
                className="topdocsbtn"
            >
                More
            </button>
        </div>
    );
};

export default TopDoctors;
