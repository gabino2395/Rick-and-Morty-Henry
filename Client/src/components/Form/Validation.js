export const validate = (userData) => {
  const errors = [];
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!userData.email) {
    errors.push("El correo electrónico no puede estar vacío.");
  } else if (userData.email.length > 35) {
    errors.push("El correo electrónico no puede tener más de 35 caracteres.");
  } else if (!emailRegex.test(userData.email)) {
    errors.push("El correo electrónico debe ser válido.");
  }

  if (!userData.password) {
    errors.push("La contraseña no puede estar vacía.");
  } else if (userData.password.length < 6 || userData.password.length > 10) {
    errors.push("La contraseña debe tener entre 6 y 10 caracteres.");
  } else if (!/\d/.test(userData.password)) {
    errors.push("La contraseña debe tener al menos un número.");
  }

  return {
    // isValid: errors.length === 0,
    errors,
  };
};
// export const validation = (userData, errors, setErrors) => {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   if (!userData.email) {
//     setErrors({ ...errors, email: "Por favor ingresa un email" });
//   } else if (userData.email.length > 35) {
//     setErrors({ ...errors, email: "No puede superar los 35 caracteres" });
//   } else if (!emailRegex.test(userData.email)) {
//     setErrors({ ...errors, email: "email invalido" });
//   } else {
//     setErrors({ ...errors, email: "" });
//   }

//   if (!userData.password) {
//     setErrors({ ...errors, password: "ingresa contraseña" });
//   } else if (userData.password.length < 6 || userData.password.length > 10) {
//     setErrors({ ...errors, password: "debe tener entre 6 y 10" });
//   } else if (!/\d/.test(userData.password)) {
//     setErrors({ ...errors, password: "debe tener por lo menos un numero" });
//   } else {
//     setErrors({ ...errors, password: "" });
//   }
// };


const validation = (userData) => {
  const errors = {};

  if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)){
      errors.email = 'el email ingresado no es válido rey/reina';
  }
  if(!userData.email){ // userData.email.length === ''
      errors.email = 'debe ingresar un email';
  }
  if(userData.email.length > 35){
      errors.email = 'el email no debe superar los 35 caracteres'
  }
  if(!/.*\d+.*/.test(userData.password)){
      errors.password = 'la contraseña debe contener al menos un número'
  }
  if(userData.password.length < 6 || userData.password.length > 10){
      errors.password = 'la contraseña debe tener un tamaño entre 6 y 10 caracteres'
  }

  return errors;
}

export default validation;