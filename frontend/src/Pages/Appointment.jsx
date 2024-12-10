import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "./../Context/AppContext";
import "./Styling/Appointment.css";
import { assets } from "../assets/assets";

const Appointment = () => {
    const { docId } = useParams();
    const { doctors, currencySymbol } = useContext(AppContext);
    const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    const [docInfo, setDocInfo] = useState(null);
    const [docSlots, setDocSlots] = useState([]);
    const [slotIndex, setSlotIndex] = useState(0);
    const [slotTime, setSlotTime] = useState("");

    const fetchDocInfo = async () => {
        const docInfo = doctors.find((doc) => doc._id === docId);
        setDocInfo(docInfo);
    };

    const getAvailableSlots = async () => {
        setDocSlots([]);

        //Getting Current Date
        let today = new Date();

        for (let i = 0; i < 7; i++) {
            //Getting Date with index
            let currentDate = new Date(today);
            currentDate.setDate(today.getDate() + i);

            //Setting End Time of the Date with index
            let endTime = new Date();
            endTime.setDate(today.getDate() + i);
            endTime.setHours(21, 0, 0, 0);

            //Setting Hours
            if (today.getDate() === currentDate.getDate()) {
                currentDate.setHours(
                    currentDate.getHours() > 10
                        ? currentDate.getHours() + 1
                        : 10
                );
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
            } else {
                currentDate.setHours(10);
                currentDate.setMinutes(0);
            }

            let timeSlots = [];

            while (currentDate < endTime) {
                let formattedTime = currentDate.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                });

                //Add slot to array
                timeSlots.push({
                    datetime: new Date(currentDate),
                    time: formattedTime,
                });

                //Increment current time by 30 minutes
                currentDate.setMinutes(currentDate.getMinutes() + 30);
            }

            setDocSlots((prev) => [...prev, timeSlots]);
        }
    };

    useEffect(() => {
        fetchDocInfo();
    }, [doctors, docId]);

    useEffect(() => {
        getAvailableSlots();
    }, [docInfo]);

    useEffect(() => {
        console.log(docSlots);
    }, [docSlots]);

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

                {/* Booking Slots */}
                <div className="bookingslots">
                    <p>Book your Slot</p>
                    <div className="slotdatetime">
                        {docSlots.length &&
                            docSlots.map((item, index) => (
                                <div key={index}>
                                    <p>
                                        {item[0] &&
                                            daysOfWeek[
                                                item[0].datetime.getDay()
                                            ]}
                                    </p>
                                    <p>
                                        {item[0] && item[0].datetime.getDate()}
                                    </p>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        )
    );
};

export default Appointment;
