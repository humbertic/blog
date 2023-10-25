import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter Your username..."
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter Your email..."
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter Your password..."
        />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">
        {" "}
        <Link className="link" to="/login">Login</Link>
      </button>
    </div>
  );
};

export default Register;
