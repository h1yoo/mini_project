import { Route, Routes } from "react-router";
import "./App.css";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import MainPage from "./components/MainPage";

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
