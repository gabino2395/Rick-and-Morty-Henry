import React from "react";
import "./Contact.css";
// eslint-disable-next-line
// import { validate } from "../helpers/validations";
const validate = (inputs) => {
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  let errors = {};

  // if (!inputs.name) {
  //   errors.name = "Se requiere un nombre";
  // }
  if (!regexEmail.test(inputs.email)) {
    errors.email = "Debe ser un correo electrónico";
  } else if (inputs.email.length > 35) {
    errors.email = "El correo electrónico no puede tener más de 35 caracteres";
  }
  if (!inputs.message) {
    errors.message = "Se requiere una contraseña";
  } else if (inputs.message.length < 6 || inputs.message.length > 10) {
    errors.message = "Se requiere acorde";
  }

  return errors;
};

export default function Contact() {
  const [inputs, setInputs] = React.useState({
    // name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = React.useState({
    // name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validate({
        ...inputs,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      handleValidation("Datos completos");
      setInputs({
        // name: "",
        email: "",
        message: "",
      });
      setErrors({
        // name: "",
        email: "",
        message: "",
      });
    } else {
      handleValidation("Debe llenar todos los campos");
    }
  };

  const handleValidation = (message) => {
    alert(message);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Correo Electrónico:</label>
        <input
          className={errors.email && "warning"}
          onChange={handleChange}
          type="text"
          name="email"
          value={inputs.email}
          placeholder="Escribe tu email..."
          id=""
        />{" "}
        {errors.email && <p className="danger">{errors.email}</p>}
        <label htmlFor="message">Password:</label>
        <input
          className={errors.password && "warning"}
          onChange={handleChange}
          value={inputs.message}
          type="password"
          placeholder="Escribe tu mensaje..."
          name="message"
          id=""
        ></input>
        {errors.message && <p className="danger">{errors.message}</p>}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
