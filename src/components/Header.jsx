import { useState } from "react";
import { LOGO_URL } from "../utils/Constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("login");

  return (
    <header className="flex  bg-pink-300 justify-around items-center shadow-lg">
      <div className="w-24">
        <img src={LOGO_URL} alt="res-logo" className="w-full" />
      </div>
      <nav className="flex gap-10">
        <li className="list-none">
          <Link to="/">Home</Link>
        </li>
        <li className="list-none">
          <Link to="/about"> About Us</Link>
        </li>
        <li className="list-none">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="list-none">
          <Link to="/cart">cart</Link>
        </li>
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
