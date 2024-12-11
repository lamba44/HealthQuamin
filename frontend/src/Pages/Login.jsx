import React, { useState } from "react";
import "./Styling/Login.css";

const Login = () => {
    const [state, setState] = useState("Sign Up");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const onSubmitHandler = async (event) => {
        event.preventDefault();
    };

    return (
        <form className="login">
            <div className="loginarea">
                <p className="logintitle">
                    {state === "Sign Up" ? "Create Account" : "Login"}
                </p>
                <p>
                    {state === "Sign Up" ? "Sign up" : "Login"} to book an
                    appointment
                </p>
                {state === "Sign Up" && (
                    <div className="loginformgroup">
                        <p>Full Name</p>
                        <input
                            className="logininput"
                            type="text"
                            onChange={(e) => setName(e.target.name)}
                            value={name}
                            required
                        />
                    </div>
                )}
                <div className="loginformgroup">
                    <p>Email</p>
                    <input
                        className="logininput"
                        type="email"
                        onChange={(e) => setEmail(e.target.email)}
                        value={email}
                        required
                    />
                </div>
                <div className="loginformgroup">
                    <p>Password</p>
                    <input
                        className="logininput"
                        type="password"
                        onChange={(e) => setPassword(e.target.password)}
                        value={password}
                        required
                    />
                </div>
                <button className="loginpagebtn">
                    {state === "Sign Up" ? "Create Account" : "Login"}
                </button>
                {state === "Sign Up" ? (
                    <p>
                        Already have an account?{" "}
                        <span
                            onClick={() => setState("Login")}
                            className="clickherelogin"
                        >
                            Login Here
                        </span>
                    </p>
                ) : (
                    <p>
                        Create a new account?{" "}
                        <span
                            onClick={() => setState("Sign Up")}
                            className="clickherelogin"
                        >
                            Click Here
                        </span>
                    </p>
                )}
            </div>
        </form>
    );
};

export default Login;
