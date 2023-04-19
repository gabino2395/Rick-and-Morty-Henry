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
import Favourites from "./components/Favourites/Favourites";

const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
const URL_NUEVA="http://localhost:3001/rickandmorty/character"
const API_KEY = "921c53ed19ee.c07a3c34e20b05d4765f";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const showNav = location.pathname !== "/";

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

  // function onSearch(id) {
  //   axios(`https://rickandmortyapi.com/api/character/${id}`)
  //     .then(({ data }) => {
  //       if (data.name) {
  //         setCharacters((oldChars) => [...oldChars, data]);
  //       } else {
  //         window.alert("¡No hay personajes con este ID!");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       window.alert("¡Error al buscar personaje por ID!");
  //     });
  // }
  const randomId = Math.floor(Math.random() * (800 - 1 + 1) + 1);
  const onSearch = (id) => {
    // axios(`${URL_BASE}/${id}?key=${API_KEY}`)
    axios(`http://localhost:3001/rickandmorty/character/${id}.`)

    .then((response) => response.data)
    .then((data) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    });
  };
  const onSearchRandom = () => {
    axios(`${URL_BASE}/${randomId}?key=${API_KEY}`)
    .then((response) => response.data)
    .then((data) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    });
    console.log(randomId);
      console.log('random')
  };

  // const onClose = (id) => {
  //   const charactersFiltered = characters.filter(
  //     (character) => character.id !== Number(id)
  //   );
  //   console.log("eliminado");
  //   setCharacters(charactersFiltered);
  // };

  const onClose = (id) => {
    const charactersFiltered = characters.filter(
      (character) => character.id !== id
    );
    console.log("cerrado");
    setCharacters(charactersFiltered);
  };

  return (
    <div className="App">
      {showNav && (
        <Nav
          onSearchRandom={onSearchRandom}
          onSearch={onSearch}
          access={access}
          setAccess={setAccess}
        />
      )}
      {/* <Nav onSearch={onSearch}/> */}
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/" element={<Form login={login} />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </div>
  );
}

export default App;
