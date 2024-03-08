import React, { useState } from 'react';
import * as styled from './Footer.styles';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = () => {
    // 이메일 중복 확인
    const storedEmails = JSON.parse(localStorage.getItem('sentEmails')) || [];

    if (storedEmails.includes(email)) {
      alert('이미 전송된 이메일입니다.');
    } else {
      alert('이메일이 전송되었습니다.');

      // 전송된 이메일 저장
      const updatedEmails = [...storedEmails, email];
      localStorage.setItem('sentEmails', JSON.stringify(updatedEmails));
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <styled.FooterContainer>
      <styled.LeftSection>
        <styled.NewsletterTitle>커피클럽 뉴스레터</styled.NewsletterTitle>
        <styled.NewsletterSubtitle>원두 커피에 관한 소식과 특별한 제안을 받아보세요.</styled.NewsletterSubtitle>
        <styled.EmailWrapper>
          <styled.EmailInput placeholder="이메일 주소를 입력해주세요." value={email} onChange={handleEmailChange} />
          <styled.SubmitButton onClick={handleEmailSubmit}>제출</styled.SubmitButton>
        </styled.EmailWrapper>
        <styled.CopyRight>&copy; 2024 Coffee Club. All rights reserved.</styled.CopyRight>
      </styled.LeftSection>

      <styled.RightSection>
        <styled.ShopTitle>쇼핑몰</styled.ShopTitle>
        <styled.SelectBox>
          <option value="option1">싱글 오리진 & 블렌드</option>
          <option value="option2">구독 서비스</option>
          <option value="option3">배송 및 환불</option>
          <option value="option3">매장 정책</option>
          <option value="option3">결제 방법</option>
          <option value="option3">FAQ</option>
        </styled.SelectBox>
        <styled.InquiryTitle>문의</styled.InquiryTitle>
        <styled.InquirySubtitle>서울특별시 info@.com Tel: 010-0000-0000</styled.InquirySubtitle>
        <styled.SNSIcons>
          <styled.SNSIcon1 href="#" target="_blank">
            <FaFacebookF />
          </styled.SNSIcon1>
          <styled.SNSIcon2 href="#" target="_blank">
            <FaTwitter />
          </styled.SNSIcon2>
          <styled.SNSIcon3 href="#" target="_blank">
            <FaInstagram />
          </styled.SNSIcon3>
        </styled.SNSIcons>
      </styled.RightSection>
    </styled.FooterContainer>
  );
};

export default Footer;
