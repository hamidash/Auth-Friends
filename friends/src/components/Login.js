import React, { useState } from "react";
import { axiosWithAuth } from "../api/axiosWithAuth";
import { useHistory } from "react-router-dom";

function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [loginErrorMessage, setLoginErrorMessage] = useState("");

  const changeHandler = (e) => {
    e.preventDefault();
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(newFormData);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    axiosWithAuth()
      .post("/login", formData)
      .then((res) => {
        console.log(res);
        setIsLoading(false);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/friends");
      })
      .catch((err) => {
        console.log(err.response);
        setIsLoading(false);
        setLoginErrorMessage("Wrong email or password");
      });
  };

  return (
    <form className="login form" onSubmit={onSubmit}>
      <label htmlFor="username">
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={changeHandler}
          placeholder="Enter your username"
        />
      </label>
      <label htmlFor="username">
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter your password"
        />
      </label>
      <button className="btn" type="submit">
        {" "}
        Login{" "}
      </button>
      {isLoading ? <p>Login is in progress</p> : <p>{loginErrorMessage}</p>}
    </form>
  );
}

export default Login;
