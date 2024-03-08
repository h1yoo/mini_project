import React from "react";

const About = () => {
  return (
    <div className="w_container">
      <h1 className="w_title">커피클럽<br />소개</h1>
      <p className="w_text">
        단락 텍스트를 추가 및 편집하려면 클릭하세요.
        글꼴을 변경하려면 "텍스트 편집"을 클릭하세요.
        단락을 통해 사용자에게 내 이야기를 전하고 자신을 소개할 수 있습니다.
      </p>
      <div className="w_coffeeContainer">
        <img src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Feb%2Fc1%2F6a%2Febc16a63848f697444d0530a35809eba.jpg&type=sc960_832"
        alt="이미지" className="w_coffeeImg"/>
        <p className="w_sideText">
          단락 텍스트를 추가 및 편집하려면 클릭하세요.
          글꼴을 변경하려면 "텍스트 편집"을 클릭하세요.
          드래그-앤-드롭 방식으로 텍스트 상자를 페이지 내 원하는 위치에 배치할 수 있습니다.
          단락을 통해 사용자에게 내 이야기를 전하고 자신을 소개해보세요.
          회사 및 서비스를 소개하는 글을 작성하기 좋습니다.
          회사에 대한 자세한 정보를 추가해보세요.
          <br />
          <br />
          회사 및 서비스를 소개하는 글을 작성해보세요.
          해당 섹션을 통해 회사에 대한 자세한 정보를 추가할 수 있습니다.
          제공 서비스 및 팀에 대해서도 소개해보세요.
          해당 비즈니스가 설립된 배경과 다른 경쟁사와의 차별점에 대해 알려주세요. 회사에 대한 상세한 정보를 제공하면 방문자들의 관심을 받을 수 있습니다. 팁: 이미지를 추가하려면 “이미지 변경”을 클릭해보세요. 해당 섹션을 통해 회사 및 서비스를 소개하는 글을 작성해보세요.
        </p>
      </div>
    </div>
  );
}

export default About;