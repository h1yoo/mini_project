import React, { useState, useEffect } from "react";
import * as styled from "./CartModal.styles";

const CartModal = ({ onClose }) => {
  const [parsedItem, setParsedItem] = useState([]);

  // 첫 렌더링시 로컬 스토리지에서 데이터 읽어오기.
  useEffect(() => {
    const selectedItem = localStorage.getItem("cart");
    //자료가 없을때 빈어레이로 저장
    setParsedItem(selectedItem ? JSON.parse(selectedItem) : []);
  }, []);

  // 상품 가격 합계 계산
  const totalAmount = parsedItem
    ? parsedItem.reduce((acc, cur) => {
        const itemPrice = parseFloat(cur.price.replace(/[^\d.-]/g, "")); // ₩ 기호와 , 를 빼고 숫자만 남기기.
        const itemTotal = itemPrice * cur.quantity;
        // 각각의 아이템 디버깅
        console.log(
          "Item:",
          cur.name,
          "Price:",
          itemPrice,
          "Quantity:",
          cur.quantity,
          "Total:",
          itemTotal
        );

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
                <div key={product.id}>
                  <p>{product.name}</p>
                  <p>{product.quantity}</p>
                  <p>{product.price}</p>
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
