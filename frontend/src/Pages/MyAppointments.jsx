import React, { useContext } from "react";
import "./Styling/MyAppointments.css";
import { AppContext } from "./../Context/AppContext";

const MyAppointments = () => {
    const { doctors } = useContext(AppContext);

    return (
        <div>
            <p className="myappoint">My Appointments</p>
            <div>
                {doctors.slice(0, 3).map((item, index) => (
                    <div className="myappointlist" key={index}>
                        <div>
                            <img
                                className="myappointdocimg"
                                src={item.image}
                                alt=""
                            />
                        </div>
                        <div className="myappointdetails">
                            <p className="myappointdocname">{item.name}</p>
                            <p>{item.speciality}</p>
                            <p className="myappointdocaddress">Address:</p>
                            <p className="myappointdocaddressline">
                                {item.address.line1}
                            </p>
                            <p className="myappointdocaddressline">
                                {item.address.line2}
                            </p>
                            <p className="myappointtime">
                                <span className="myappointtimespan">
                                    Date and Time:
                                </span>{" "}
                                31st December 2024 | 04:00pm
                            </p>
                        </div>
                        <div></div>
                        <div className="myappointbtncontainer">
                            <button className="myappointbtn myappointpaybtn">
                                Pay Online
                            </button>
                            <button className="myappointbtn myappointcancelbtn">
                                Cancel Appointment
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyAppointments;
