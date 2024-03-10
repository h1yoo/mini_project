import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { VscAdd, VscChromeMinimize } from "react-icons/vsc";
import Modal from 'react-modal';
import NavBar from './NavBar';
import Footer from './Footer';

const Product = ({ products }) => {
  //============== state ==============//
  const [selectedImage, setSelectedImage] = useState(null); // 선택된 썸네일 이미지
  const [prodCount, setProdCount] = useState(1);  // 제품 수량 (input)
  const [cart, setCart] = useState([]);   // 카트에 추가 ===> 아직 미완성 !!!!!!!!!!!
  const [cartInLocalStorage, setCartInLocalStorage] = useState([]); // 로컬스토리지에 저장된 카트
  const [isPurModalOpen, setIsPurModalOpen] = useState(false);  // 구매버튼 클릭 시 모달창 열림 여부
  
  //============== useParams를 이용해 products에 등록된 Id를 가져오기 ==============//
  //============== (상단 ul - li 부분에 적용 + 썸네일 이미지 가져올 때 필요) ==============//
  const { productId } = useParams();
  const productIndex = products.findIndex(p => p.id === parseInt(productId, 10));
  
  const currentProductIdx = products[productIndex];
  //////////////////////////////////////////////////////////////
  
  //============== 썸네일 클릭 시 큰 이미지로 보이게 하는 함수 ==============//
  //============== (중앙 left 부분 이미지) ==============//
  const handleThumbImgClick = (thumbImg) => {
    setSelectedImage(thumbImg);
  };

  //============== 데이터 로컬 스토리지 저장 함수 ==============//
  useEffect(() => {
    // 페이지 로드 시 로컬 스토리지에서 장바구니 데이터 불러오기
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartInLocalStorage(storedCart);
  }, []);

  useEffect(() => {
    // 장바구니가 업데이트될 때 로컬 스토리지에 저장
    localStorage.setItem("cart", JSON.stringify(cartInLocalStorage));
  }, [cartInLocalStorage]);

  const handleInputChange = (e) => {
    const count = parseInt(e.target.value, 10);
    setProdCount(count);
  };

  const addToCart = () => {
    const productToAdd = products.find((product) => product.id === productId);

    if (!productToAdd) {
      console.error("Product not found!");
      return;
    }

    const newItem = {
      id: productToAdd.id,
      name: productToAdd.name,
      price: productToAdd.price,
      quantity: prodCount,
    };
    
    setCartInLocalStorage((prevCart) => [...prevCart, newItem]);
    setCart((prevCart) => [...prevCart, newItem]);
  };
  ////////////////////////////////////////////

  //============== 해당 정보에 관한 내용들 보이게 하거나 숨기거나 ==============//
  const handlePurchaseClick = () => {
    setIsPurModalOpen(true);
  };

  const handleClosePurModal = () => {
    setIsPurModalOpen(false);
  };
  ////////////////////////////////////////////

  //============== 해당 정보에 관한 내용들 보이게 하거나 숨기거나 ==============//
  //============== (중간 오른쪽 부분에 적용) ==============//
  const [infoSections, setInfoSections] = useState([
    { title: "제품 정보",
      content: "제품 정보입니다. 제품 크기, 재질, 관리 및 세척 방법 등에 대한 자세한 설명을 추가하세요.\
                해당 섹션을 이용해 제품의 특별함과 필요성을 서술하면 좋습니다.\
                상세한 설명을 통해 소비자들에게 확신을 심어줄 수 있으므로 최대한 많은 정보를 포함시켜주세요.",
      isOpen: true },
    { title: "환불 정책",
      content: "환불 및 교환 정책입니다.\
                고객이 구매한 제품에 만족하지 않을 시 필요한 절차에 대한 설명입니다.\
                명확한 환불 및 교환 정책은 고객에게 제품 구매에 대한 신뢰를 줄 수 있습니다.",
      isOpen: false },
    { title: "배송 정보",
      content: "배송 정보입니다.\
                배송 절차, 제품 포장 및 비용에 대한 설명을 추가하세요.\
                명확한 배송 정보는 고객에게 제품 구매에 대한 신뢰를 줄 수 있습니다.",
      isOpen: false }
  ]);
  const toggleInfoSection = (index) => {
    setInfoSections((prevSections) => {
      const newInfoSections = prevSections.map((infoSection, i) => ({
        ...infoSection,
        isOpen: index === i ? !infoSection.isOpen : false,
      }));
      return newInfoSections;
    });
  };
  ////////////////////////////////////////////
  return (
    <div className="w_laytout">
      <NavBar />

      <div className="w_prodCont">
        <div className="w_prodTop">
          <ul className="w_topLink">
            {/* 파라미터를 이용한 라우터 연결 */}
            <li>
              <Link to="/">메인</Link>
            </li>
            <li>&nbsp;/&nbsp;</li>
            <li>
              <Link to="/shop">쇼핑몰</Link>
            </li>
            <li>&nbsp;/&nbsp;</li>
            <li className="w_TopliProdName">{currentProductIdx.name}</li>
          </ul>

          {/* "이전" 클릭 시 id값이 하나 작은 것으로 이동하고, "다음" 클릭 시 하나 큰 걸로 이동 */}
          <ul className="w_topLink">
            <li>
              {currentProductIdx.id > 0 ?
                (<Link to={`/products/${currentProductIdx.id - 1}`}><BsChevronLeft />&nbsp;이전</Link>) :
                (<span className="w_textBlock"><BsChevronLeft />&nbsp;이전</span>)}
              </li>
            <li>&nbsp;|&nbsp;</li>
            <li>
              {currentProductIdx.id < products.length - 1 ? // products의 마지막 id값보다 작을 때
              (<Link to={`/products/${currentProductIdx.id + 1}`}>다음&nbsp;<BsChevronRight /></Link>) :
              (<span className="w_textBlock">다음&nbsp;<BsChevronRight /></span>)}
            </li>
          </ul>
        </div>  {/***** w_prodTop 끝 *****/}
          
        {/* 제품 이미지, 정보, 수량 입력 및 카트에 추가, 구매하기 버튼 */}
        <div className="w_prodImgText">
          {/* 왼쪽 큰이미지랑 그 밑에 썸네일 이미지 */}
          <div className="w_prodLeft">
            <img
              src={selectedImage === currentProductIdx.hoveredImage ? currentProductIdx.hoveredImage : currentProductIdx.image}
              alt={currentProductIdx.name}  className="w_prodImg"
            />
            <div className="w_prodSmallImgCont">
              <img src={currentProductIdx.image} alt={currentProductIdx.name}
                   className="w_prodSmallImg"
                   onClick={() => handleThumbImgClick(currentProductIdx.image)}/>
              <img src={currentProductIdx.hoveredImage} alt={currentProductIdx.name}
                   className="w_prodSmallImg"
                   onClick={() => handleThumbImgClick(currentProductIdx.hoveredImage)}/>
            </div>
          </div>  {/***** w_prodLeft (이미지) 끝 *****/}
          {/* 오른쪽 제품명, 가격, 수량 입력 및 정보들 */}
          <div className="w_prodRight">
            <p className="w_prodText">{currentProductIdx.name}</p>
            <p className="w_prodPrice">{currentProductIdx.price}</p>
            <div className="w_prodCountCont">
              <p className="w_prodCount">수량</p>
              <div>
                {/* 수량 입력 input */}
                <input
                  className="w_prodCountInput"
                  type="number"
                  value={prodCount}
                  step="1"
                  min="1"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            {/* 카트에 추가 버튼과 구매하기 버튼 */}
            <div className="w_prodBtnInfoCont">
              <button className="w_prodAddBtn" onClick={addToCart}>카트에 추가</button>
              <button className="w_prodBuyBtn" onClick={handlePurchaseClick}>구매하기</button>
              {/* 모달 */}
              <Modal isOpen={isPurModalOpen} onRequestClose={handleClosePurModal} className="PurchaseModalCont">
                <div className="PurchaseModal">
                  <h2>온라인 주문 접수 불가</h2>
                  <p>구매를 완료하려면 직접 연락해 주세요.</p>
                  <button onClick={handleClosePurModal}>닫기</button>
                </div>
              </Modal>
              {/*********************************/}
              {/********** 정보들 표시 **********/}
              <div className="w_prodInfosCont">
                {infoSections.map((infoSection, index) => (
                  <div key={index} className="w_prodInfoCont">
                    <div className="w_titleCont" onClick={() => toggleInfoSection(index)}>
                    <p className="w_titleText">{infoSection.title}</p>
                    {infoSection.isOpen ?
                      <span className="w_titleSymbol"><VscChromeMinimize /></span> :
                      <span className="w_titleSymbol"><VscAdd /></span>}
                    </div>
                    {infoSection.isOpen && 
                      <p className="w_infoText">{infoSection.content}</p>}
                  </div>
                ))}
              </div>  {/***** w_prodInfosCont 끝 *****/}
            </div>  {/***** w_prodBtnInfoCont 끝 *****/}
          </div>  {/***** w_prodRight 끝 *****/}
        </div>  {/***** w_prodImgText 끝 *****/}
      </div>
      
      <Footer />
    </div>
  );
};

export default Product;