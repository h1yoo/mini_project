import React from "react";
import { Route, Routes, Link, useParams } from 'react-router-dom';
import ShoppingItemList from "./ShoppingItemList";

const Product = ({products}) => {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId, 10));

  if (!product) {
    return <div>상품을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="w_prodCont">
      <div className="w_prodTop">
        <ul className="w_topLink">
          {/* 파라미터를 이용한 라우터 연결 */}
          <li><Link to="/main">메인</Link></li>
          <li>&nbsp;/&nbsp;</li>
          <li><Link to="/shop">쇼핑몰</Link></li>
          <li>&nbsp;/&nbsp;</li>
          <li>{product.name}</li>
        </ul>
        <ul>
          <li><Link to="/shop">상품 목록</Link></li>
          <li>&nbsp;|&nbsp;</li>
          <li>{product.name}</li>
        </ul>
      </div>
      <div className="prodImgText">
        <div>
          <img src={products.image} alt={products.name} className="w_prodImg" />
        </div>
      </div>
    </div>
  );
};

export default Product;