import React from 'react';
import NavBar from './NavBar';
import * as styled from './MainPage.styles';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { FaTruck } from 'react-icons/fa';
import { BiSolidCoffeeBean } from 'react-icons/bi';
import { IoCalendarNumberSharp } from 'react-icons/io5';

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
        <styled.MainPageImage src="/assets/MainPage/mainImg.jpg" alt="coffee package img" />

        <styled.SubscriptionTitle>구독 방법</styled.SubscriptionTitle>

        {/* 구독 방법 설명 */}
        <styled.SubscriptionBox>
          <styled.SubscriptionContent>
            <styled.SubscriptionTextWrapper>
              <styled.SubscriptionText>
                <styled.SubscriptionTextNumber>01</styled.SubscriptionTextNumber>
                <styled.SubscriptionTextIcon>
                  <BiSolidCoffeeBean />
                </styled.SubscriptionTextIcon>
                <styled.SubscriptionTextDescription>
                  원두의 종류를
                  <br />
                  골라주세요.
                </styled.SubscriptionTextDescription>
              </styled.SubscriptionText>

              <styled.SubscriptionText>
                <styled.SubscriptionTextNumber>02</styled.SubscriptionTextNumber>
                <styled.SubscriptionTextIcon>
                  <IoCalendarNumberSharp />
                </styled.SubscriptionTextIcon>
                <styled.SubscriptionTextDescription>
                  구독 서비스 플랜을
                  <br />
                  설정하세요.
                </styled.SubscriptionTextDescription>
              </styled.SubscriptionText>

              <styled.SubscriptionText>
                <styled.SubscriptionTextNumber>03</styled.SubscriptionTextNumber>
                <styled.SubscriptionTextIcon>
                  <FaTruck />
                </styled.SubscriptionTextIcon>
                <styled.SubscriptionTextDescription>
                  매달 신선한 커피가
                  <br />
                  배송됩니다.
                </styled.SubscriptionTextDescription>
              </styled.SubscriptionText>
            </styled.SubscriptionTextWrapper>

            {/* 구독 버튼 */}
            <Link to="/shop">
              <styled.SubscriptionButton>구독하기</styled.SubscriptionButton>
            </Link>
          </styled.SubscriptionContent>

          <styled.SubscriptionImage src="/assets/MainPage/coffeeBeans.gif" alt="coffee bean gif" />
        </styled.SubscriptionBox>
      </styled.MainPageContainer>

      <styled.IntroSection>
        <styled.IntroImage src="/assets/MainPage/IntroImg.png" alt="Intro image" />

        <styled.IntroContent>
          <styled.IntroText>커피클럽 소개</styled.IntroText>
          <styled.IntroSubtitle>당신 만을 위한 신선한 스페셜티 커피</styled.IntroSubtitle>
          <styled.IntroDescription>
            우리의 특제 블렌드는 단순한 커피를 넘어 풍부한 맛의 세계를 제공합니다. 우리의 특별한 블렌딩으로 새로운 커피 경험을 만나보세요.
            <br /> "커피를 더 나은 방식으로 즐기는 곳, 커피클럽."
          </styled.IntroDescription>
          <Link to="/another-page">
            <styled.IntroButton>더보기</styled.IntroButton>
          </Link>
        </styled.IntroContent>
      </styled.IntroSection>
      <Footer />
    </div>
  );
};

export default MainPage;
