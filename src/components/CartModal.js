import React, { useState, useEffect } from "react";
import * as styled from "./CartModal.styles";
import "./CartModalStyles.css";

const CartModal = ({ onClose, products }) => {
  const [parsedItem, setParsedItem] = useState([]);

  // 첫 렌더링시 로컬 스토리지에서 데이터 읽어오기.
  useEffect(() => {
    const selectedItem = localStorage.getItem("cart");
    //자료가 없을때 빈어레이로 저장
    setParsedItem(selectedItem ? JSON.parse(selectedItem) : []);
  }, []);

  // 상품 삭제 기능
  const removeProduct = (productId) => {
    const updatedCart = parsedItem.filter(
      (product) => product.id !== productId
    );
    setParsedItem(updatedCart);

    // 로컬스토리지에서 선택한 아이템 삭제
    const updatedLocalStorage = JSON.stringify(updatedCart);
    localStorage.setItem("cart", updatedLocalStorage);
  };

  // 상품 가격 합계 계산
  const totalAmount = parsedItem
    ? parsedItem.reduce((acc, cur) => {
        const itemPrice = parseFloat(cur.price.replace(/[^\d.-]/g, "")); // ₩ 기호와 , 를 빼고 숫자만 남기기.
        const itemTotal = itemPrice * cur.quantity;

        // (유혜원) 이미지 추가하기 위한 코드 작성
        // products 배열에서 현재 제품과 일치하는 객체 찾기
        const matchingProduct = products.find(
          (product) => product.id === cur.id
        );
        // 이미지가 있는 경우에만 이미지 URL 사용
        const itemImage = matchingProduct ? matchingProduct.image : "";

        return acc + itemTotal;
      }, 0)
    : 0;

  // Overlay 클릭 시 모달창 닫기
  const handleOverlayClick = () => {
    onClose();
  };

  return (
    <>
      <styled.CartModalBox>
        <styled.CartModalContent>
          <styled.CartModalHeader>
            <styled.CloseButton onClick={onClose}>
              <styled.ArrowIcon />
            </styled.CloseButton>
            <styled.CartTitle>쇼핑 카트</styled.CartTitle>
          </styled.CartModalHeader>
          <styled.CartModalBody>
            {parsedItem.length === 0 ? (
              // 카트가 비어있는 경우
              <styled.EmptyCartMessage>
                카트가 비어있습니다.
              </styled.EmptyCartMessage>
            ) : (
              // 카트에 상품이 있는 경우
              parsedItem.map((product) => (
                <div key={product.id} className="w_cartModalCont">
                  <img src={product.image} alt={product.name} />
                  <div>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                    <p>수량: {product.quantity}</p>
                    <button
                      style={{ fontSize: "0.7rem" }}
                      onClick={() => removeProduct(product.id)}
                    >
                      삭제
                    </button>
                  </div>
                </div>
              ))
            )}
          </styled.CartModalBody>
          {/* 상품 가격 합계 표시 */}
          {parsedItem.length > 0 && (
            <>
              <styled.TotalAmount>Total: {totalAmount}원</styled.TotalAmount>
              <styled.CartViewButton>카트 보기</styled.CartViewButton>
            </>
          )}
        </styled.CartModalContent>
      </styled.CartModalBox>
      <styled.Overlay onClick={handleOverlayClick} />
    </>
  );
};

export default CartModal;
