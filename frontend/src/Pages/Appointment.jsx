import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "./../Context/AppContext";
import "./Styling/Appointment.css";
import { assets } from "../assets/assets";
import RelatedDoctors from "../Components/RelatedDoctors/RelatedDoctors";

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

        let today = new Date();

        for (let i = 0; i < 7; i++) {
            let currentDate = new Date(today);
            currentDate.setDate(today.getDate() + i);

            let endTime = new Date();
            endTime.setDate(today.getDate() + i);
            endTime.setHours(21, 0, 0, 0);

            if (i === 0 && today.getHours() >= 21) {
                continue;
            }

            if (i === 0) {
                currentDate.setHours(
                    today.getHours() > 10 ? today.getHours() + 1 : 10
                );
                currentDate.setMinutes(today.getMinutes() > 30 ? 30 : 0);
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

                timeSlots.push({
                    datetime: new Date(currentDate),
                    time: formattedTime,
                });

                currentDate.setMinutes(currentDate.getMinutes() + 30);
            }

            if (timeSlots.length) {
                setDocSlots((prev) => [...prev, timeSlots]);
            }
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
                            </span>
                        </p>
                    </div>
                </div>

                {/* Booking Slots */}
                <div className="bookingslots">
                    <p>Book your Slot</p>
                    <div className="slotdatetime">
                        {docSlots.length &&
                            docSlots.map((item, index) => (
                                <div
                                    onClick={() => setSlotIndex(index)}
                                    className={`slot-item ${
                                        slotIndex === index
                                            ? "selected-slot"
                                            : "default-slot"
                                    }`}
                                    key={index}
                                >
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
                    <div className="slottime">
                        {docSlots.length &&
                            docSlots[slotIndex].map((item, index) => (
                                <p
                                    onClick={() => setSlotTime(item.time)}
                                    className={`time-slot ${
                                        item.time === slotTime
                                            ? "selected-time"
                                            : "default-time"
                                    }`}
                                    key={index}
                                >
                                    {item.time.toLowerCase()}
                                </p>
                            ))}
                    </div>
                    <button className="bookbtn">Book Appointment</button>
                </div>
                {/* Listing Related Doctors */}
                <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
            </div>
        )
    );
};

export default Appointment;
