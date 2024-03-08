import React from "react";
import { Link } from "react-router-dom";
import * as styled from "./NavBar.styles";

const NavBar = () => {
  return (
    <styled.Container>
      {/* 좌측 영역 */}
      <styled.LeftSection>
        {/* 로고 */}
        <styled.Logo>
          <Link to="/">Coffee Club</Link>
        </styled.Logo>

        {/* 네비게이션 메뉴 */}
        <styled.NavLinks>
          <styled.NavLink to="/shop">쇼핑몰</styled.NavLink>
          <styled.NavLink to="/about">소개</styled.NavLink>
        </styled.NavLinks>
      </styled.LeftSection>

      {/* 우측 영역 */}
      <styled.RightSection>
        {/* 로그인 및 카트 */}
        <styled.NavLinks>
          <styled.UserIcon />
          <Link to="/login">로그인</Link>
          <styled.CartButton>카트</styled.CartButton>
        </styled.NavLinks>
      </styled.RightSection>
    </styled.Container>
  );
};

export default NavBar;
