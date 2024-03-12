import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const About = () => {
  return (
    <div className="w_laytout">
      <NavBar />

      <div iv className="w_container">
        <h1 className="w_title">
          커피클럽
          <br />
        </h1>
        <p className="w_text">
          환영합니다! 커피클럽은 커피를 사랑하는 이들을 위한 특별한 공간입니다.
          우리는 직접 선별한 최상급 원두들로 구성된 특별한 커피 구독 서비스를
          제공하고 있습니다.
        </p>
        <div className="w_coffeeContainer">
          <img
            src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Feb%2Fc1%2F6a%2Febc16a63848f697444d0530a35809eba.jpg&type=sc960_832"
            alt="이미지"
            className="w_coffeeImg"
          />
          <p className="w_sideText">
            🌿 <strong>최상급 원두의 선별</strong> <br />
            커피클럽에서는 세계 각지의 다양한 원두 중에서 오직 최상급의 퀄리티를
            보장하는 원두들만을 골라 제공합니다. 향, 맛, 그리고 품질에 대한
            우리의 헌신은 여러분에게 최상의 커피 경험을 약속합니다.
            <br />
            <br />☕ <strong>맞춤형 구독 서비스</strong> <br />
            여러분은 자유롭게 원하는 주기로, 원하는 양의 커피를 선택 하세요.
            커피 전문가들이 정성스럽게 고른 추천 상품들도 확인해보세요.
            커피클럽은 여러분의 취향을 고려하여 최적화된 맞춤형 구독 서비스를
            제공합니다.
            <br />
            <br />
            🚚 <strong>배송의 편의 </strong> <br />
            커피클럽은 여러분이 선택한 원두를 빠르고 안전하게 여러분의 문 앞까지
            배달합니다. 빠르고 효율적인 배송 시스템을 통해 언제 어디서나
            여러분의 커피를 즐길 수 있습니다.
            <br />
            <br />
            🤝 <strong>커뮤니티 참여</strong> <br />
            커피는 경험입니다. 커피클럽에서는 커피에 관한 이야기를 나누고,
            다양한 커피 팁과 레시피를 공유하는 커뮤니티에 참여할 수 있습니다.
            여러분의 커피 여정을 함께 나누어보세요.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
