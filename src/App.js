import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import { Button } from "react-bootstrap";
// import 파일명 from './경로';
import ShoppingItemList from './w_comp/ShoppingItemList';
import About from './w_comp/About';
import Product from './w_comp/Product';

const products = [
  { id: 0, name: "케냐", price: "￦ 15,000",
    image: "https://static.wixstatic.com/media/ea26fd_84ba71cee5d74b16af7557b810bafdf8~mv2.jpg/v1/fill/w_625,h_834,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_84ba71cee5d74b16af7557b810bafdf8~mv2.jpg",
    hoveredImage: "https://static.wixstatic.com/media/ea26fd_a2ebe0fb878d41bc913dc7b758819b24~mv2.jpg/v1/fill/w_625,h_834,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_a2ebe0fb878d41bc913dc7b758819b24~mv2.jpg"
  },
  { id: 1, name: "켈리포니아", price: "￦ 15,000",
    image: "https://static.wixstatic.com/media/ea26fd_111928228dd04e19b0edf49e04c1ef67~mv2.jpg/v1/fill/w_625,h_834,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_111928228dd04e19b0edf49e04c1ef67~mv2.jpg",
    hoveredImage: "https://static.wixstatic.com/media/ea26fd_ceef4cfc61a04a3a9c191af3a3c3a28f~mv2.jpg/v1/fill/w_625,h_834,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_ceef4cfc61a04a3a9c191af3a3c3a28f~mv2.jpg"
  },
  { id: 2, name: "과테말라", price: "￦ 15,000",
    image: "https://static.wixstatic.com/media/ea26fd_0d99fc5fbad94b6e81674288c3c52980~mv2.jpg/v1/fill/w_625,h_834,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_0d99fc5fbad94b6e81674288c3c52980~mv2.jpg",
    hoveredImage: "https://static.wixstatic.com/media/ea26fd_f96eb94c011a42ff9e53d4e83aee5007~mv2.jpg/v1/fill/w_625,h_834,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_f96eb94c011a42ff9e53d4e83aee5007~mv2.jpg"
  },
  { id: 3, name: "인도네시아", price: "￦ 15,000",
    image: "https://static.wixstatic.com/media/ea26fd_52337e6694374750946e3c95d071de9d~mv2.jpg/v1/fill/w_625,h_834,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_52337e6694374750946e3c95d071de9d~mv2.jpg",
    hoveredImage: "https://static.wixstatic.com/media/ea26fd_ace0cdf50c494b0091210b2914f8b2dd~mv2.jpg/v1/fill/w_625,h_834,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_ace0cdf50c494b0091210b2914f8b2dd~mv2.jpg"
  },
  { id: 4, name: "블렌드01", price: "￦ 15,000",
    image: "https://static.wixstatic.com/media/ea26fd_5ba7c6075ceb4a1383905ea99934bb73~mv2.jpg/v1/fill/w_625,h_834,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_5ba7c6075ceb4a1383905ea99934bb73~mv2.jpg",
    hoveredImage: "https://static.wixstatic.com/media/ea26fd_55dc019971b64f878f746a777ded13a1~mv2.jpg/v1/fill/w_625,h_834,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_55dc019971b64f878f746a777ded13a1~mv2.jpg"
  },
  { id: 5, name: "블렌드02", price: "￦ 15,000",
    image: "https://static.wixstatic.com/media/ea26fd_55dc019971b64f878f746a777ded13a1~mv2.jpg/v1/fill/w_625,h_834,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_55dc019971b64f878f746a777ded13a1~mv2.jpg",
    hoveredImage: "https://static.wixstatic.com/media/ea26fd_5ba7c6075ceb4a1383905ea99934bb73~mv2.jpg/v1/fill/w_625,h_834,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_5ba7c6075ceb4a1383905ea99934bb73~mv2.jpg"
  },
  { id: 6, name: "블렌드03", price: "￦ 15,000",
    image: "https://static.wixstatic.com/media/ea26fd_24e11e731a9740328dd8bc7db667bae2~mv2.jpg/v1/fill/w_625,h_834,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_24e11e731a9740328dd8bc7db667bae2~mv2.jpg",
    hoveredImage: "https://static.wixstatic.com/media/ea26fd_49f59ee2e23e4e97ba5403f72ded6084~mv2.jpg/v1/fill/w_625,h_834,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_49f59ee2e23e4e97ba5403f72ded6084~mv2.jpg"
  },
  { id: 7, name: "블렌드04", price: "￦ 15,000",
    image: "https://static.wixstatic.com/media/ea26fd_49f59ee2e23e4e97ba5403f72ded6084~mv2.jpg/v1/fill/w_625,h_834,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_49f59ee2e23e4e97ba5403f72ded6084~mv2.jpg",
    hoveredImage: "https://static.wixstatic.com/media/ea26fd_24e11e731a9740328dd8bc7db667bae2~mv2.jpg/v1/fill/w_625,h_834,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_24e11e731a9740328dd8bc7db667bae2~mv2.jpg"
  },
];

function App() {
  return (
    <div>
      <div>
        {/* <Button variant="primary">react-bootstrap 예시</Button> */}
      </div>
      {/* Counter.js에 Counter 함수에 number값 0 넘겨줌 */}
      {/* <Counter number={0}/> */}
      {/* <Nav /> */}
      <hr />
      <Routes>
        {/* <Route path='/' element={<Main />} />
        <Route path='/main' element={<Main />} /> */}
        <Route path='/shop' element={<ShoppingItemList products={products}/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/products/:productId' element={<Product products={products} />} />
      
      </Routes>
      <hr />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
