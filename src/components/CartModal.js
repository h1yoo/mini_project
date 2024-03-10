import React from 'react';
import * as styled from './CartModal.styles';

const CartModal = ({ products, onClose }) => {
  // 상품 가격 합계 계산
  const totalAmount = products.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);

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
            {products.length === 0 ? (
              // 카트가 비어있는 경우
              <styled.EmptyCartMessage>카트가 비어있습니다.</styled.EmptyCartMessage>
            ) : (
              // 카트에 상품이 있는 경우
              products.map((product) => (
                <div key={product.id}>
                  <p>{product.name}</p>
                  <p>{product.price}</p>
                </div>
              ))
            )}
          </styled.CartModalBody>
          {/* 상품 가격 합계 표시 */}
          {products.length > 0 && (
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
