import React, { useState } from "react";
import Logo from "../Assets/Images/logo.png";
import CS from "../Assets/Images/cs.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge, faSortDown } from "@fortawesome/free-solid-svg-icons";
import HeaderSearch from "./HeaderSearch";
import HeaderDropdown from "./HeaderDropdown";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const [text, setText] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="container-fluid header-bg">
      <div className="container">
        <div className="row header-items ">
          <div className="myitem col-md-3" onClick={() => navigate("/")}>
            <img src={Logo} className="header-logo" />
            <img src={CS} className="small-logo" />
          </div>

          <div className="myitem col-md-2 mt-2">
            <p className="cat-label">
              <FontAwesomeIcon icon={faThLarge} /> Categories{" "}
              <FontAwesomeIcon className="mb-1" icon={faSortDown} />
            </p>
          </div>
          <div className="myitem col-md-5">
            <HeaderSearch setText={setText} text={text} />
          </div>
          <div className="myitem col-md-2 comunity-and-user-icon">
            <a href="#" className="community-link">
              community
            </a>
            <div
              className="user-acc-circle"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <p className="user-acc-label">C</p>
              {showDropdown && (
                <HeaderDropdown closeDropDown={setShowDropdown} />
              )}
            </div>
          </div>
          <div className="col-sm-12 col-12 tabs-header">
            <ul className="nav nav-pills nav-fill">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Categories
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Ongoing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Finished
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">New</a>
              </li>
            </ul>
          </div>
        </div>

        {/* {showDropdown && <HeaderDropdown closeDropDown={setShowDropdown} />} */}
      </div>
    </div>
  );
}

export default Header;
