import React, {useState } from 'react';
import PropTypes from 'prop-types';

import './Login.css';


export default function Login() {

  const [userData, setUserData] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState({ value: "", isError: false });

  const handleInputChange = (event) => {
    setUserData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //if username or password field is empty, return error message
    if (userData.username === "" || userData.password === "") {
      setErrorMessage((prevState) => ({
        value: "Empty username/password field",
      }));

    } else if (
      userData.username.toLowerCase() === "admin" &&
      userData.password === "123456"
    ) {
      //Signin Success
      localStorage.setItem("isAuthenticated", "true");
      window.location.pathname = "/";
    } else {
      //If credentials entered is invalid
      setErrorMessage((prevState) => ({ value: "Invalid username/password" }));
      return;
    }
  };

  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" name="username" onChange={(e) => handleInputChange(e)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" name="password"  onChange={(e) => handleInputChange(e)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )


}

