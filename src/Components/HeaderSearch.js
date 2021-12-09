import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function HeaderSearch({ text, setText }) {
  const navigate = useNavigate();
//   const _onChangeSearch = (e) => {
//     if (e.keyCode === 13) {
//       console.log("Enter was pressed ");
//     }
//     setText(e.target.value);
//     console.log("test", e);
//   };
  const _isEnterKeyPressed = (e) => {
    if (e.charCode === 13) {
        navigate("/search")
    }
  };
  return (
    <div className="search-container">
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
      <input
        className="search-textInput"
        value={text}
        placeholder="Search..."
        onChange={(e) => setText(e.target.value)}
        // onChange={(e) => _onChangeSearch(e)}
        onKeyPress={(e) => _isEnterKeyPressed(e)}
      />
    </div>
  );
}

export default HeaderSearch;
