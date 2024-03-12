import React, { useState } from "react";
import "./Login.css";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "./NavBar";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // 로그인 성공시 데이터를 local storage에 저장
  const handleLoginSuccess = () => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", userEmail);
    // 메인페이지로 이동
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 로그인 정보를 서버로 보내기
      const response = await axios.post("http://localhost:3000/api/login", {
        email: userEmail,
        password: userPassword,
      });

      // handlesubmit 성공시
      alert("로그인이 되었습니다.");
      setIsLoggedIn(true);
      handleLoginSuccess();
    } catch (error) {
      // Handle login error
      if (error.response && error.response.status === 401) {
        alert("유효하지 않은 이메일주소 혹은 비밀번호입니다.");
      } else {
        alert("Login failed. Please check your credentials and try again.");
      }
      console.error(error);
    }
  };
  //로그인한 유저이면 메인페이지로 이동
  if (isLoggedIn) {
    navigate("/");
  }

  return (
    <>
      <NavBar />
      <div className="c-wrapper">
        <form onSubmit={handleSubmit}>
          <h1>로그인</h1>
          <div className="c-input-box">
            <input
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              type="email"
              placeholder="아이디 입력"
              required
            />
            <FaUser className="c-icon" />
          </div>
          <div className="c-input-box">
            <input
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              type="password"
              placeholder="비밀번호 입력"
              required
            />
            <FaLock className="c-icon" />
          </div>
          <div className="c-remember">
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              Remember me
            </label>
          </div>
          <button type="submit">로그인</button>
          <div className="c-register-link">
            <p>
              아이디가 없나요? <Link to="/signup">회원가입</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
