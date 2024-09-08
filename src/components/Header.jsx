import {  useState } from "react";
import { LOGO_URL } from "../utils/Constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("login");
 

  return (
    <header className="header">
      <div className="logo">
        <img src={LOGO_URL} alt="res-logo" />
      </div>
      <nav className="nav-bar">
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to="/about"> About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        {/* <li>
          <Link to="">cart</Link>
        </li> */}
        <button
          onClick={() => {
            if (loginBtn === "login") {
              setLoginBtn("logout");
            } else {
              setLoginBtn("login");
            }
          }}
          className="btn-login"
        >
          {loginBtn}
        </button>
      </nav>
    </header>
  );
};

export default Header;
