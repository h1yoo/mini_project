import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as styled from "./NavBar.styles";
import CartModal from "./CartModal";

const NavBar = () => {
  const loginData = localStorage.getItem("isLoggedIn");
  const [showCartModal, setShowCartModal] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const cartItem = localStorage.getItem("cart");
    setCartProducts(cartItem ? JSON.parse(cartItem) : []);
  }, []);

  // 총 수량 구하는 함수
  const getTotalQuantity = () => {
    const totalProducts = cartProducts.reduce(
      (total, item) => total + item.quantity,
      0
    );

    return totalProducts;
  };

  const LogOut = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    alert("로그아웃 되었습니다.");
    const navigate = useNavigate();
    navigate("/");
  };

  const openCartModal = () => {
    setShowCartModal(true);
  };

  const closeCartModal = () => {
    setShowCartModal(false);
  };

  return (
    <styled.Container>
      {/* 좌측 영역 */}
      <styled.LeftSection>
        <styled.Logo>
          <Link to="/">Coffee Club</Link>
        </styled.Logo>

        <styled.NavLinks>
          <styled.NavLink to="/shop">쇼핑몰</styled.NavLink>
          <styled.NavLink to="/about">소개</styled.NavLink>
        </styled.NavLinks>
      </styled.LeftSection>

      {/* 우측 영역 */}
      <styled.RightSection>
        <styled.NavLinks>
          <styled.UserIcon />
          {loginData ? (
            <Link to="/" onClick={LogOut}>
              로그아웃
            </Link>
          ) : (
            <Link to="/login">로그인</Link>
          )}

          {/* 카트 버튼 */}
          <styled.CartButton onClick={openCartModal}>
            카트
            {/* {cartProducts.length > 0 ? `(${getTotalQuantity()})` : "(0)"} */}
          </styled.CartButton>
        </styled.NavLinks>
      </styled.RightSection>

      {/* 카트 모달 */}
      {showCartModal && (
        <CartModal products={cartProducts} onClose={closeCartModal} />
      )}
    </styled.Container>
  );
};

export default NavBar;
