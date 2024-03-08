import React, { useState } from "react";
import "./Login.css";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 로그인 정보를 서버로 보내기
      const response = await axios.post("http://localhost:3000/api/login", {
        email: userEmail,
        password: userPassword,
      });

      // handlesubmit 성공시
      alert(response.data.message);

      // 메인페이지로 이동
      navigate("/");
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
  return (
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
  );
};

export default Login;
