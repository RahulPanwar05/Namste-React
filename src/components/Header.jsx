import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/Constant";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("login");
  
  useEffect(()=>{
    console.log("useEffect run")
  },[loginBtn])
  return (
    <header className="header">
      <div className="logo">
        <img src={LOGO_URL} alt="res-logo" />
      </div>
      <nav className="nav-bar">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href=""> about us</a>
        </li>
        <li>
          <a href="">contact us</a>
        </li>
        <li>
          <a href="">cart</a>
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
