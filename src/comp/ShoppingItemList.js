import React from "react";
import { Route, Routes, Link } from 'react-router-dom';

const shoppingItems = [
  { id: 0, name: "케냐", price: "￦ 15,000", image: "https://static.wixstatic.com/media/ea26fd_84ba71cee5d74b16af7557b810bafdf8~mv2.jpg/v1/fill/w_625,h_834,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_84ba71cee5d74b16af7557b810bafdf8~mv2.jpg" },
  { id: 1, name: "켈리포니아", price: "￦ 15,000", image: "https://static.wixstatic.com/media/ea26fd_111928228dd04e19b0edf49e04c1ef67~mv2.jpg/v1/fill/w_625,h_834,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_111928228dd04e19b0edf49e04c1ef67~mv2.jpg" },
  { id: 2, name: "과테말라", price: "￦ 15,000", image: "https://static.wixstatic.com/media/ea26fd_0d99fc5fbad94b6e81674288c3c52980~mv2.jpg/v1/fill/w_625,h_834,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_0d99fc5fbad94b6e81674288c3c52980~mv2.jpg" },
  { id: 3, name: "인도네시아", price: "￦ 15,000", image: "https://static.wixstatic.com/media/ea26fd_52337e6694374750946e3c95d071de9d~mv2.jpg/v1/fill/w_625,h_834,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_52337e6694374750946e3c95d071de9d~mv2.jpg" },
  { id: 4, name: "블렌드01", price: "￦ 15,000", image: "https://static.wixstatic.com/media/ea26fd_5ba7c6075ceb4a1383905ea99934bb73~mv2.jpg/v1/fill/w_625,h_834,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_5ba7c6075ceb4a1383905ea99934bb73~mv2.jpg" },
  { id: 5, name: "블렌드02", price: "￦ 15,000", image: "https://static.wixstatic.com/media/ea26fd_55dc019971b64f878f746a777ded13a1~mv2.jpg/v1/fill/w_625,h_834,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_55dc019971b64f878f746a777ded13a1~mv2.jpg" },
  { id: 6, name: "블렌드03", price: "￦ 15,000", image: "https://static.wixstatic.com/media/ea26fd_24e11e731a9740328dd8bc7db667bae2~mv2.jpg/v1/fill/w_625,h_834,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_24e11e731a9740328dd8bc7db667bae2~mv2.jpg" },
  { id: 7, name: "블렌드04", price: "￦ 15,000", image: "https://static.wixstatic.com/media/ea26fd_49f59ee2e23e4e97ba5403f72ded6084~mv2.jpg/v1/fill/w_625,h_834,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_49f59ee2e23e4e97ba5403f72ded6084~mv2.jpg" },
];

const ShoppingItemList = () => {
  
  return (
    <div className="w_container">
      <h2 className="w_title">싱글 오리진 & 블렌드<br />​쇼핑하기</h2>
      <p className="w_text">단락 텍스트를 추가 및 편집하려면 클릭하세요.
        글꼴을 변경하려면 "텍스트 편집"을 클릭하세요.
        단락을 통해 사용자에게 내 이야기를 전하고 자신을 소개할 수 있습니다.</p>

      <div className="w_thumbList">
        {shoppingItems.map((item) => (
          <div key={item.id} className="w_thumbnail">
            <img src={item.image} alt={item.name} className="w_thumbImg" />
            <p className="w_thumbName"><b>{item.name}</b></p>
            <p className="w_thumbPrice">{item.price}</p>
          </div>
        ))}
      </div>
      
      {/* 상품 목록에 따라 라우팅 */}
      <Routes>
        {/* {shoppingItems.map((item) => (
          <Route key={item.id} path={`/shop/${item.id}`} element={<ShoppingItem item={item} />} />
        ))} */}
      </Routes>      
    </div>
  );
};

export default ShoppingItemList;