import React, { useState } from "react";

function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const changeHandler = (e) => {
    e.preventDefault();
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(newFormData);
  };

  const onSubmit = (e) =>  {
    e.preventDefault();
  }

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
      <button className="btn"> Login </button>
    </form>
  );
}

export default Login;
