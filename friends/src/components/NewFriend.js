import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../api/axiosWithAuth";

const NewFriend = () => {

  const [ formData, setFormData ] = useState({
    name: "",
    email: "",
    age: "",
  });

  const history = useHistory();

  const changeHandler = (e) => {
    e.preventDefault();

    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };

    setFormData(newFormData);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/friends", formData)
      .then((res) => {
        history.push('/friends');
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <label htmlFor="name">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={changeHandler}
          placeholder="Enter friend's name"
        /> <br/>
      </label>
      <label htmlFor="age">
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={changeHandler}
          placeholder="Enter friend's age"
        />
      </label><br/>
      <label htmlFor="email">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter friend's email"
        />
      </label><br/>
      <button className="btn">Submit</button>
    </form>
  );
};

export default NewFriend;
