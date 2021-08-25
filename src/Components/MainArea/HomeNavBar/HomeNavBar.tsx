import { NavLink } from "react-router-dom";
import "./HomeNavBar.css";

function HomeNavBar(): JSX.Element {
    return (
        <div className="HomeNavBar">
      <ul>
             <li><NavLink exact to = "/home">Home</NavLink></li>
            <li className="dropdown">
                <div className="topnav-right">
    <li><NavLink exact to = "/login" className="active1">Login</NavLink></li>
  </div>
        </li>
            </ul>
            </div>
    );
}

export default HomeNavBar;
