import { useEffect, useState } from "react";
import Navbar from "./Nav";

const Balance = ({ users }) => {
  const [bal, setbal] = useState();
  const role = window.localStorage.getItem("role");

  useEffect(() => {
    if (role === "user") {
      const found = users.find(
        (d) => d.id == window.localStorage.getItem("id")
      );
      if (found) {
        setbal(found.balance);
      }
    }
  }, [role, users]);

  // Styles
  const containerStyle = {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    background: "#f4f6f8",
    minHeight: "100vh",
  };

  const balanceCardStyle = {
    background: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    maxWidth: "400px",
    margin: "50px auto",
    fontSize: "22px",
    color: "#333",
  };

  const tableContainerStyle = {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    maxWidth: "700px",
    margin: "50px auto",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    textAlign: "left",
  };

  const thTdStyle = {
    border: "1px solid #ddd",
    padding: "10px",
  };

  const thStyle = {
    background: "#0077b6",
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      <Navbar />
      {role === "user" ? (
        <div style={balanceCardStyle}>
          💰 Your Current Balance: <strong>₹{bal}</strong>
        </div>
      ) : (
        <div style={tableContainerStyle}>
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
            User Balances
          </h2>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={{ ...thTdStyle, ...thStyle }}>ID</th>
                <th style={{ ...thTdStyle, ...thStyle }}>Name</th>
                <th style={{ ...thTdStyle, ...thStyle }}>Balance</th>
              </tr>
            </thead>
            <tbody>
              {users.map((d) => (
                <tr key={d.id}>
                  <td style={thTdStyle}>{d.id}</td>
                  <td style={thTdStyle}>{d.name}</td>
                  <td style={thTdStyle}>₹{d.balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Balance;
