import React, {useState} from "react";
import { Link } from 'react-router-dom';


const ShoppingItemList = ({products}) => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleMouseEnter = (hoveredImage) => {
    setHoveredImage(hoveredImage);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };
  
  return (
    <div className="w_container">
      <h1 className="w_title">싱글 오리진 & 블렌드<br />​쇼핑하기</h1>
      <p className="w_text">
        단락 텍스트를 추가 및 편집하려면 클릭하세요.
        글꼴을 변경하려면 "텍스트 편집"을 클릭하세요.
        단락을 통해 사용자에게 내 이야기를 전하고 자신을 소개할 수 있습니다.
      </p>

      <div className="w_thumbList">
        {products.map(product => (
          <div key={product.id} className="w_thumbnail">
            <Link to={`/products/${product.id}`}>
              <img src={hoveredImage === product.hoveredImage ? hoveredImage : product.image}
                   alt={product.name} className="w_thumbImg" 
                   onMouseEnter={() => handleMouseEnter(product.hoveredImage)}
                   onMouseLeave={() => handleMouseLeave()}/>
                   {/* setState를 화살표 함수로 래핑함으로써 해당 코드는 사용자가 클릭할 때만 변할 수 있도록 함수 설정
                       그렇게 되면 무한루프에 걸리지 않게 됨
                       (안 그러면 Too many re-renders. React limits the number of renders to prevent an infinite loop 에러 발생) */}
            </Link>
            <Link to={`/products/${product.id}`} className="w_thumbName">{product.name}</Link>
            <Link to={`/products/${product.id}`} className="w_thumbPrice">{product.price}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingItemList;