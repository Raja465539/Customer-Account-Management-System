import { useState } from "react";
import { NavLink } from "react-router-dom";

const Login = ({ users, nav }) => {
  const [user, setuser] = useState({
    name: "",
    password: "",
  });

  // Inline styles
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "linear-gradient(to right, #0077b6, #00b4d8)",
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
    background: "#0077b6",
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
    color: "#0077b6",
    textDecoration: "none",
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h1>Login</h1>
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
          value="Login"
          onClick={() => {
            const found = users.find(
              (d) => d.name === user.name && d.password === user.password
            );
            if (found) {
              console.log(found);
              setuser({
                name: "",
                password: "",
              });
              window.localStorage.setItem("id", found.id);
              window.localStorage.setItem("role", found.role);
              nav("/bal");
            } else {
              alert("Login failed");
            }
          }}
        />
        <NavLink to="/reg" style={linkStyle}>
          Register
        </NavLink>
      </div>
    </div>
  );
};

export default Login;
