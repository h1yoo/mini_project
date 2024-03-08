import React from 'react';
import NavBar from './NavBar';
import * as styled from './MainPage.styles';
import Footer from './Footer';

const MainPage = () => {
  return (
    <div>
      <NavBar />
      <styled.MainPageContainer>
        <styled.MainPageTitle>
          원두 커피
          <br />
          매달 구독 서비스 개시
        </styled.MainPageTitle>
        <styled.MainPageSubtitle>원하는 커피를 고르고 간편한 정기 배송을 신청해 보세요.</styled.MainPageSubtitle>
        <styled.MainPageImage src="/assets/MainPage/mainImg.jpg" alt="Main Image" />
      </styled.MainPageContainer>
      <Footer />
    </div>
  );
};

export default MainPage;
