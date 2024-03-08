import './App.css';
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import ShoppingItemList from './comp/ShoppingItemList';
// import 파일명 from './경로';


function App() {
  return (
    <div>
      <div>
        <Button variant="primary">react-bootstrap 예시</Button>
      </div>
      {/* Counter.js에 Counter 함수에 number값 0 넘겨줌 */}
      {/* <Counter number={0}/> */}
      {/* <Nav /> */}
      <hr />
      <Routes>
        {/* <Route path='/' element={<Main />} />
        <Route path='/main' element={<Main />} /> */}
        <Route path='/shop' element={<ShoppingItemList />} />
      </Routes>
      <hr />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
