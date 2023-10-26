import "./topbar.css";
import topimg from "./pexels-ian-g-13464606.jpg";
import { Link } from "react-router-dom";

const TopBar = () => {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-linkedin"></i>
        <i className="topIcon fa-brands fa-square-github"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              Home
            </Link>
          </li>

          <li className="topListItem">
            {" "}
            <Link to="/" className="link">
              About
            </Link>
          </li>

          <li className="topListItem">
            {" "}
            <Link to="/" className="link">
              Contact
            </Link>
          </li>

          <li className="topListItem">
            {" "}
            <Link to="/write" className="link">
              Write
            </Link>
          </li>

          <li className="topListItem">
            {" "}
            <Link to="/" className="link">
              {user && "LOGOUT"}
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user? <img className="topImg" src={topimg} alt="PefilImg" />:(
          <ul className="topList">
            <li  className="topListItem"><Link className="link" to="/login">LOGIN</Link></li>
            <li  className="topListItem"><Link className="link" to="/register">REGISTER</Link></li>
          </ul>
        )}
       
        <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default TopBar;
