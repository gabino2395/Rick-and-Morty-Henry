import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
// import Card from './components/card/Card.jsx';
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";

function App() {
  const navigate = useNavigate();

  const [characters, setCharacters] = useState([]);

  const [access, setAccess] = useState(false);
  let EMAIL = "gjmendezacosta@gmail.com";
  let PASSWORD = "lebron23J";

  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      })
      .catch((error) => {
        console.error(error);
        window.alert("¡Error al buscar personaje por ID!");
      });
  }

  const onClose = (id) => {
    const charactersFiltered = characters.filter(
      (character) => character.id !== Number(id)
    );
    console.log("eliminado");
    setCharacters(charactersFiltered);
  };

  const location = useLocation();
  const showNav = location.pathname !== "/";

  return (
    <div className="App">
      {showNav && <Nav onSearch={onSearch} access={access} setAccess={setAccess} />}
      {/* <Nav onSearch={onSearch}/> */}
      <Routes>
        
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/" element={<Form login={login} />} />
      </Routes>
    </div>
  );
}

export default App;
