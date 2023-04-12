import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./nav.css";
import SearchBar from "../SearchBar/SearchBar";
const Nav = ({ onSearch, access, setAccess }) => {
  // const navigate = useNavigate();
  const gologin = () => {
    setAccess(false);
    // navigate("/");
  };
  // access = true;
  return (
    <div className="nav-box">
      <nav>
        <NavLink to={"/home"}>Home</NavLink>
        <NavLink className="link" to={"/about"}>
          About
        </NavLink>

        <div className="search-logout-box">
          <SearchBar onSearch={onSearch} />{" "}
        </div>
        <button className="user-icon" onClick={gologin}>
          <i className="bi bi-person-circle user-icon2 "></i>
        </button>
      </nav>
    </div>
  );
};

export default Nav;
