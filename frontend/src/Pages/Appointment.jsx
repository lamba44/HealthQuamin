import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "./../Context/AppContext";
import "./Styling/Appointment.css";
import { assets } from "../assets/assets";

const Appointment = () => {
    const { docId } = useParams();
    const { doctors, currencySymbol } = useContext(AppContext);

    const [docInfo, setDocInfo] = useState(null);
    const [docSlots, setDocSlots] = useState([]);
    const [slotIndex, setSlotIndex] = useState(0);

    const fetchDocInfo = async () => {
        const docInfo = doctors.find((doc) => doc._id === docId);
        setDocInfo(docInfo);
        console.log(docInfo);
    };

    useEffect(() => {
        fetchDocInfo();
    }, [doctors, docId]);

    return (
        docInfo && (
            <div>
                {/* Doctor Details */}
                <div className="docdetails">
                    <div>
                        <img className="docimg" src={docInfo.image} alt="" />
                    </div>
                    <div className="docinfo">
                        {/* Doctor Info */}
                        <p className="docname">
                            {docInfo.name}{" "}
                            <img
                                className="verifyicon"
                                src={assets.verified_icon}
                                alt=""
                            />
                        </p>
                        <div className="docqual">
                            <p>
                                {docInfo.degree} - {docInfo.speciality}
                            </p>
                            <button className="docexp">
                                {docInfo.experience}
                            </button>
                        </div>
                        {/* Doctor About */}
                        <div>
                            <p className="docabout">
                                About <img src={assets.info_icon} alt="" />
                            </p>
                            <p className="docaboutdesc">{docInfo.about}</p>
                        </div>
                        <p className="docappointmentfee">
                            Appointment Fee:{" "}
                            <span className="docprice">
                                {currencySymbol}
                                {docInfo.fees}
                            </span>{" "}
                        </p>
                    </div>
                </div>
            </div>
        )
    );
};

export default Appointment;
