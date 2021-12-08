import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function HeaderSearch({text, setText}) {
    return (
        <div className="search-container">
            <FontAwesomeIcon icon={faSearch} className="search-icon"/>
            <input 
            className="search-textInput"
            value={text} 
            placeholder="Search..."
            onChange={(e) => setText(e.target.value)}/>
        </div>
    )
}

export default HeaderSearch
