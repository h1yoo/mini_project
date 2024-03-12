import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const ShoppingItemList = ({ products }) => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleMouseEnter = (hoveredImage) => {
    setHoveredImage(hoveredImage);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  return (
    <div className="w_laytout">
      <NavBar />

      <div className="w_container">
        <h1 className="w_title">
          싱글 오리진 & 블렌드
          <br />
          ​쇼핑하기
        </h1>
        <p className="w_text">
          당신의 커피 여정을 더욱 풍부하게 만들어보세요. 커피클럽은 다양한 싱글
          오리진과 정교한 블렌드를 선보입니다. 고르고 맛보고, 여러분만의 즐거운
          커피 시간을 시작해보세요. 탁월한 퀄리티의 원두들이 여러분을 기다리고
          있습니다.
        </p>

        <div className="w_thumbList">
          {products.map((product) => (
            <div key={product.id} className="w_thumbnail">
              <Link to={`/products/${product.id}`}>
                <img
                  src={
                    hoveredImage === product.hoveredImage
                      ? hoveredImage
                      : product.image
                  }
                  alt={product.name}
                  className="w_thumbImg"
                  onMouseEnter={() => handleMouseEnter(product.hoveredImage)}
                  onMouseLeave={() => handleMouseLeave()}
                />
                {/* setState를 화살표 함수로 래핑함으로써 해당 코드는 사용자가 클릭할 때만 변할 수 있도록 함수 설정
                        그렇게 되면 무한루프에 걸리지 않게 됨
                        (안 그러면 Too many re-renders. React limits the number of renders to prevent an infinite loop 에러 발생) */}
              </Link>
              <Link to={`/products/${product.id}`} className="w_thumbName">
                {product.name}
              </Link>
              <Link to={`/products/${product.id}`} className="w_thumbPrice">
                {product.price}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ShoppingItemList;
