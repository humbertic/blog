import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter Your email..."
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter Your password..."
        />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">  <Link className="link" to="/register">Register</Link></button>
    </div>
  );
};

export default Login;
