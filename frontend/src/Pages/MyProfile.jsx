import React, { useState } from "react";
import "./Styling/MyProfile.css";
import { assets } from "./../assets/assets";

const MyProfile = () => {
    const [userData, setUserData] = useState({
        name: "Edward Vincent",
        image: assets.profile_pic,
        email: "dummyemail@email.com",
        phone: "+91 123 4567 898",
        address: {
            line1: "57th Cross, Richmond",
            line2: "Circle, Church Street, Bengaluru",
        },
        gender: "Male",
        dob: "2024-12-25",
    });

    const [isEdit, setIsEdit] = useState(false);

    return (
        <div className="profile">
            <img className="profileimg" src={userData.image} alt="" />

            {isEdit ? (
                <input
                    className="editname"
                    type="text"
                    value={userData.name}
                    onChange={(e) =>
                        setUserData((prev) => ({
                            ...prev,
                            name: e.target.value,
                        }))
                    }
                />
            ) : (
                <p className="profilename">{userData.name}</p>
            )}

            <hr className="profilehr" />

            <div>
                <p className="profilesubhead">CONTACT INFORMATION</p>
                <div className="profiledata">
                    <p className="profilekey">Email:</p>
                    <p className="profileinfospecial">{userData.email}</p>
                    <p className="profilekey">Phone:</p>
                    {isEdit ? (
                        <input
                            className="editinfo"
                            type="text"
                            value={userData.phone}
                            onChange={(e) =>
                                setUserData((prev) => ({
                                    ...prev,
                                    phone: e.target.value,
                                }))
                            }
                        />
                    ) : (
                        <p className="profileinfospecial">{userData.phone}</p>
                    )}
                    <p className="profilekey">Address:</p>
                    {isEdit ? (
                        <p>
                            <input
                                className="editinfo"
                                onChange={(e) =>
                                    setUserData((prev) => ({
                                        ...prev,
                                        address: {
                                            ...prev.address,
                                            line1: e.target.value,
                                        },
                                    }))
                                }
                                value={userData.address.line1}
                                type="text"
                            />
                            <br />
                            <input
                                className="editinfo"
                                onChange={(e) =>
                                    setUserData((prev) => ({
                                        ...prev,
                                        address: {
                                            ...prev.address,
                                            line2: e.target.value,
                                        },
                                    }))
                                }
                                value={userData.address.line2}
                                type="text"
                            />
                        </p>
                    ) : (
                        <p className="profileinfo">
                            {userData.address.line1}
                            <br />
                            {userData.address.line2}
                        </p>
                    )}
                </div>
            </div>
            <div>
                <p className="profilesubhead">BASIC INFORMATION</p>
                <div className="profiledata">
                    <p className="profilekey">Gender:</p>
                    {isEdit ? (
                        <select
                            className="genderselector"
                            onChange={(e) =>
                                setUserData((prev) => ({
                                    ...prev,
                                    gender: e.target.value,
                                }))
                            }
                            value={userData.gender}
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    ) : (
                        <p className="profileinfo">{userData.gender}</p>
                    )}
                    <p className="profilekey">Date of Birth:</p>
                    {isEdit ? (
                        <input
                            className="dateselector"
                            type="date"
                            onChange={(e) =>
                                setUserData((prev) => ({
                                    ...prev,
                                    dob: e.target.value,
                                }))
                            }
                            value={userData.dob}
                        />
                    ) : (
                        <p className="profileinfo">{userData.dob}</p>
                    )}
                </div>
            </div>
            <div className="profilebtncontainer">
                {isEdit ? (
                    <button
                        className="profilebtn"
                        onClick={() => setIsEdit(false)}
                    >
                        Save
                    </button>
                ) : (
                    <button
                        className="profilebtn"
                        onClick={() => setIsEdit(true)}
                    >
                        Edit
                    </button>
                )}
            </div>
        </div>
    );
};

export default MyProfile;
