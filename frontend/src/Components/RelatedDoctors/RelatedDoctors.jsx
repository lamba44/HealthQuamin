import React, { useContext, useEffect, useState } from "react";
import "./RelatedDoctors.css";
import { AppContext } from "../../Context/AppContext";
import { useNavigate } from "react-router-dom";

const RelatedDoctors = ({ speciality, docId }) => {
    const { doctors } = useContext(AppContext);

    const navigate = useNavigate();

    const [relDoc, setRelDocs] = useState([]);

    useEffect(() => {
        if (doctors.length > 0 && speciality) {
            const doctorsData = doctors.filter(
                (doc) => doc.speciality === speciality && doc._id !== docId
            );
            setRelDocs(doctorsData);
        }
    }, [doctors, speciality, docId]);

    return (
        <div className="reldocs">
            <h1 className="reldocsheading">Top Doctors to Book</h1>
            <p className="reldocsdesc">
                Simply browse through our extensive list of trusted doctors.
            </p>
            <div className="reldocsgrid">
                {relDoc.slice(0, 5).map((item, index) => (
                    <div
                        onClick={() => {
                            navigate(`/appointment/${item._id}`),
                                scrollTo(0, 0);
                        }}
                        className="reldocsgriditem"
                        key={index}
                    >
                        <img
                            className="reldocsgriditemimg"
                            src={item.image}
                            alt=""
                        />
                        <div className="reldocsgriditemcontent">
                            <div className="reldocsgriditemav">
                                <p className="greendot"></p>
                                <p>Available</p>
                            </div>
                            <p className="reldocname">{item.name}</p>
                            <p className="reldocspec">{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button
                onClick={() => {
                    navigate("/doctors");
                    scrollTo(0, 0);
                }}
                className="reldocsbtn"
            >
                More
            </button>
        </div>
    );
};

export default RelatedDoctors;
