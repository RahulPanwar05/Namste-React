import { Apple, User } from "lucide-react";
import "./header.css";

function Header() {
  return (
    <div className="main">
      <Apple  size={36} color="red"/>
      <div className="search">
        <input type="text" placeholder="search here" />
      </div>
      <User  size={36} color="red"/>
    </div>
  );
}

export default Header;
