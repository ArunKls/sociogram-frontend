import React, { useState } from "react";
import signUpManager from "../../managers/signUpManager";
import "./signup.css";

const Signup = () => {
  const [userData, setUserData] = useState({
    age: "",
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !userData.name ||
      !userData.email ||
      !userData.password ||
      !userData.age
    ) {
      setError("All fields are required");
    } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
      setError("Please enter a valid email address");
    } else {
      const response = signUpManager(userData);
      if (response.status === 200) {
        prompt("Signup successful");
      } else {
        console.log("signup failed");
      }

      console.log("Singup function completed");
      setError("");
    }
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <h2 className="title">Create Account</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Full Name"
            value={userData.name}
            onChange={handleChange}
          />
          <input
            className="input"
            type="number"
            name="age"
            placeholder="Age"
            value={userData.age}
            onChange={handleChange}
          />
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email Address"
            value={userData.email}
            onChange={handleChange}
          />
          <input
            className="input"
            type="password"
            name="password"
            placeholder="Password"
            value={userData.password}
            onChange={handleChange}
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
