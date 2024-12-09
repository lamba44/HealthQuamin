import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "./../Context/AppContext";
import "./Styling/Doctors.css";

const Doctors = () => {
    const { speciality } = useParams();
    const [filterDoc, setFilterDoc] = useState([]);
    const navigate = useNavigate();

    const { doctors } = useContext(AppContext);

    const applyFilter = () => {
        if (speciality) {
            setFilterDoc(
                doctors.filter((doc) => doc.speciality === speciality)
            );
        } else {
            setFilterDoc(doctors);
        }
    };

    useEffect(() => {
        applyFilter();
    }, [doctors, speciality]);

    return (
        <div>
            <p className="alldocstopline">Browse through our specialists.</p>
            <div className="alldocsfilter">
                <div className="alldocsfiltermenu">
                    {[
                        "General physician",
                        "Gynecologist",
                        "Dermatologist",
                        "Pediatricians",
                        "Neurologist",
                        "Gastroenterologist",
                    ].map((item) => (
                        <p
                            key={item}
                            onClick={() =>
                                speciality === item
                                    ? navigate("/doctors")
                                    : navigate(`/doctors/${item}`)
                            }
                            className={`filteritem ${
                                speciality === item ? "active" : ""
                            }`}
                        >
                            {item}
                        </p>
                    ))}
                </div>

                <div className="alldocsgrid">
                    {filterDoc.map((item, index) => (
                        <div
                            onClick={() => navigate(`/appointment/${item._id}`)}
                            className="alldocsgriditem"
                            key={index}
                        >
                            <img
                                className="alldocsgriditemimg"
                                src={item.image}
                                alt=""
                            />
                            <div className="alldocsgriditemcontent">
                                <div className="alldocsgriditemav">
                                    <p className="greendot"></p>
                                    <p>Available</p>
                                </div>
                                <p className="alldocname">{item.name}</p>
                                <p className="alldocspec">{item.speciality}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Doctors;
