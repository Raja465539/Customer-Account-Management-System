import React from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const role = window.localStorage.getItem("role");
  console.log(role);
  const nav = useNavigate();
  return (
    <nav className="navbar">
      <div className="logo">MySite</div>
      <ul className="nav-links">
        <li>
          <NavLink to="/bal">Home</NavLink>
        </li>
        {role == "admin" && (
          <li>
            <NavLink to="/dep">Deposit</NavLink>
          </li>
        )}
        {role == "admin" && (
          <li>
            <NavLink to="/wit">Withdraw</NavLink>
          </li>
        )}
        {role == "admin" && (
          <li>
            <NavLink to="/tra">Transfer</NavLink>
          </li>
        )}
        <li
          style={{
            color: "white",
            cursor: "pointer",
          }}
          onClick={() => {
            window.localStorage.clear();
            nav("/");
          }}
        >
          Logout
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
