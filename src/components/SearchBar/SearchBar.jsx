import { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setId("");
    setId(e.target.value)
    console.log(id)

  };
  const handleSearch = () => {
    onSearch(id);
    setId("");
  };

  return (
    <div>
      {/* <input type="search" /> */}

      <div className="search-input-main">
        <div className="search-input-box">
          <input
          onChange={handleChange}
            value={id}
            className="main-input"
            type="text"
            placeholder="Add..."
          />
          {/* <i className="bi bi-search icon-search"></i> */}
          <button
          className="search-icon"
            // onClick={(id) => {
            //   props.onSearch(id);
            // }}
            onClick={()=>onSearch(id)}
          >
            {" "}
            <i class="bi bi-search search-icon"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
