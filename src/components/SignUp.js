import React, { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaMobileAlt, FaHome } from "react-icons/fa";
import axios from "axios";

const SignUp = () => {
  //============== state ==============//
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const navigate = useNavigate();

  //============== 데이터 로컬 스토리지 저장 함수 ==============//
  const handleSubmit = async (e) => {
    e.preventDefault();
    //============== 비밀번호 유효성 검사 ==============//
    const passwordCheck =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;
    // 비밀번호가 일치하는지 확인
    // localStorage.setItem("email", userEmail);
    // localStorage.setItem("password", userPassword);
    // localStorage.setItem("number", userNumber);
    // localStorage.setItem("Address", userAddress);
    if (passwordCheck.test(userPassword) && userPassword === checkPassword) {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/register",
          {
            email: userEmail,
            password: userPassword,
            number: userNumber,
            address: userAddress,
          }
        );

        // 회원가입 성공시
        alert(response.data.message);
        // 회원가입 성공시 로그인페이지로 이동
        navigate("/login");
      } catch (error) {
        // Handle registration error
        alert("회원가입이 실패하였습니다. 다시 시도해주세요");
        console.error(error);
      }
    } else {
      alert(
        "비밀번호가 일치하지 않거나 조건이 충족되지 않습니다. (적어도 하나의 대문자, 소문자, 특수문자 그리고 숫자를 포함 해야하고 8자 이상이어야 합니다.)"
      );
    }
  };

  return (
    <div className="c-wrapper">
      <form onSubmit={handleSubmit}>
        <h1>회원가입</h1>
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
            placeholder="비밀번호"
            required
          />
          <FaLock className="c-icon" />
        </div>

        <div className="c-input-box">
          <input
            value={checkPassword}
            onChange={(e) => setCheckPassword(e.target.value)}
            type="password"
            placeholder="비밀번호 재입력"
            required
          />
          <FaLock className="c-icon" />
        </div>
        <div className="c-input-box">
          <input
            value={userNumber}
            onChange={(e) => setUserNumber(e.target.value)}
            type="text"
            placeholder="전화번호"
            required
          />
          <FaMobileAlt className="c-icon" />
        </div>
        <div className="c-input-box">
          <input
            value={userAddress}
            onChange={(e) => setUserAddress(e.target.value)}
            type="text"
            placeholder="주소"
            required
          />
          <FaHome className="c-icon" />
        </div>

        <button type="submit">회원가입</button>
        <div className="c-register-link">
          <p>
            아이디가 있나요? <Link to="/login">로그인</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
