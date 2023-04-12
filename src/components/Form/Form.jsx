import React, { useState } from "react";
// import { validate } from "./Validation";

import validation from "./Validation";

import "./Form.css";
const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  // const handleChange = (event) => {
  //   const property = event.target.name;
  //   const value = event.target.value;
  //   setUserData({ ...userData, [property]: value });
  //   validation({ ...userData, [property]: value }, errors, setErrors);
  //   // setUserData({
  //   //   ...userData,
  //   //   [event.target.name]: event.target.value,
  //   // });
  //   // setErrors(
  //   //   validate({
  //   //     ...userData,
  //   //     [event.target.name]: event.target.value,
  //   //   })
  //   // );
  // };
  const handleChange = (event) => {
    setUserData({
        ...userData,
        [event.target.name]: event.target.value
    })

    setErrors(validation({
        ...userData,
        [event.target.name]: event.target.value
    }))
}

  const handleValidation = (message) => {
    alert(message);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
    // if (Object.keys(errors).length === 0) {
    //   handleValidation("Datos completos");
    //   setUserData({
    //     name: "",
    //     email: "",
    //     message: "",
    //   });
    //   setErrors({
    //     name: "",
    //     email: "",
    //     message: "",
    //   });
    // } else {
    //   handleValidation("Debe llenar todos los campos");
    // }
  };

  return (
    <div className="form-container">
      <form className="login-form" action="" onSubmit={handleSubmit}>
        <div className="form-title">
          <h3>Rick and morty app</h3>
          <h2>Welcome</h2>
          <p>Log in to Rick and Morty app</p>
        </div>
        <div className="input-form-box">
          <label className="label-input-login" htmlFor="email">
            Email
          </label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            id=""
            value={userData.email}
            placeholder="  Your email.."
            className="input-form-login"
          />

          {errors.email && <p className="danger">{errors.email}</p>}
        </div>
        <div className="input-form-box">
          <label className="label-input-login" htmlFor="password">
            Password
          </label>

          <input
            onChange={handleChange}
            type="password"
            value={userData.password}
            name="password"
            id=""
            className="input-form-login "
          />
          {errors.password && <p className="danger">{errors.password}</p>}
        </div>
{/* {!errors.password  &&

        <button className="login-btn" type="submit">
          Login
        </button>
} */}
<button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Form;
