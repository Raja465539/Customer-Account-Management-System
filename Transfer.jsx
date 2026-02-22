import { useState } from "react";
import Navbar from "./Nav";

const Transfer = ({ users, setusers }) => {
  const [id, setid] = useState("");
  const [toid, settoid] = useState("");
  const [am, setam] = useState("");

  // Styles
  const containerStyle = {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    background: "#f4f6f8",
    minHeight: "100vh",
  };

  const formCardStyle = {
    background: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    maxWidth: "400px",
    margin: "50px auto",
    textAlign: "center",
  };

  const selectStyle = {
    width: "90%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
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

  return (
    <div style={containerStyle}>
      <Navbar />
      <div style={formCardStyle}>
        <h1>Transfer Amount</h1>
        <select
          style={selectStyle}
          value={id}
          onChange={(e) => setid(e.target.value)}
        >
          <option value="">Select Sender</option>
          {users.map((d) => (
            <option key={d.id} value={d.id}>
              {d.id} - {d.name}
            </option>
          ))}
        </select>

        <select
          style={selectStyle}
          value={toid}
          onChange={(e) => settoid(e.target.value)}
        >
          <option value="">Select Receiver</option>
          {users.map((d) => (
            <option key={d.id} value={d.id}>
              {d.id} - {d.name}
            </option>
          ))}
        </select>

        <input
          style={inputStyle}
          type="number"
          placeholder="Enter amount"
          value={am}
          onChange={(e) => setam(e.target.value)}
        />

        <input
          style={buttonStyle}
          type="submit"
          value="Transfer"
          onClick={() => {
            if (!id || !toid || !am) {
              alert("Please fill all fields.");
              return;
            }
            if (id === toid) {
              alert("Sender and receiver cannot be the same.");
              return;
            }
            const sender = users.find((u) => u.id === parseInt(id));
            if (sender.balance < parseInt(am)) {
              alert("Insufficient balance.");
              return;
            }

            const updatedUsers = users.map((d) => {
              if (d.id === parseInt(id)) {
                return { ...d, balance: d.balance - parseInt(am) };
              }
              if (d.id === parseInt(toid)) {
                return { ...d, balance: d.balance + parseInt(am) };
              }
              return d;
            });

            setusers(updatedUsers);
            setam("");
            setid("");
            settoid("");
            alert("Transfer successful!");
          }}
        />
      </div>
    </div>
  );
};

export default Transfer;
