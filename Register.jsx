import { useState } from "react";
import { NavLink } from "react-router-dom";

const Register = ({ users, setusers, nav }) => {
  const [user, setuser] = useState({
    name: "",
    password: "",
    role: "user",
    balance: 500,
  });

  // Styles
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "linear-gradient(to right, #06beb6, #48b1bf)",
    fontFamily: "Arial, sans-serif",
  };

  const formStyle = {
    background: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    width: "300px",
    textAlign: "center",
  };

  const inputStyle = {
    width: "90%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    background: "#06beb6",
    color: "white",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  };

  const linkStyle = {
    display: "block",
    marginTop: "15px",
    color: "#06beb6",
    textDecoration: "none",
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h1>Register</h1>
        <input
          style={inputStyle}
          type="text"
          placeholder="Username"
          value={user.name}
          onChange={(e) => {
            setuser({ ...user, name: e.target.value });
          }}
        />
        <input
          style={inputStyle}
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => {
            setuser({ ...user, password: e.target.value });
          }}
        />
        <input
          style={buttonStyle}
          type="submit"
          value="Register"
          onClick={() => {
            user.id = users.length > 0 ? users[users.length - 1].id + 1 : 1;
            setusers([...users, user]);
            setuser({
              name: "",
              password: "",
              role: "user",
              balance: 500,
            });
            nav("/");
          }}
        />
        <NavLink to="/" style={linkStyle}>
          Back to Login
        </NavLink>
      </div>
    </div>
  );
};

export default Register;
