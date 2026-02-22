import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
import Transfer from "./Transfer";
import Balance from "./Balance";
import { useState } from "react";

const App = () => {
  const [users, setusers] = useState([
    { id: 1, name: "admin", password: "admin", role: "admin", balance: 500 },
  ]);
  const nav = useNavigate();
  console.log(users);
  return (
    <>
      <Routes>
        <Route path="/" element={<Login users={users} nav={nav} />} />
        <Route
          path="/reg"
          element={<Register users={users} setusers={setusers} nav={nav} />}
        />
        <Route
          path="/dep"
          element={<Deposit users={users} setusers={setusers} />}
        />
        <Route
          path="/wit"
          element={<Withdraw users={users} setusers={setusers} />}
        />
        <Route
          path="/tra"
          element={<Transfer users={users} setusers={setusers} />}
        />
        <Route path="/bal" element={<Balance users={users} />} />
      </Routes>
    </>
  );
};

export default App;
