import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export const FooterContainer = styled.footer`
  background-color: #d3d3d3;
  color: #343a40;
  padding: 40px;
  padding-bottom: 70px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LeftSection = styled.div`
  flex: 1;
  max-width: 400px;
  margin-right: 20px;
  flex-direction: column;
`;

export const NewsletterTitle = styled.h2`
  flex-direction: column;
  margin-bottom: -7px;
`;

export const NewsletterSubtitle = styled.p`
  margin-bottom: 20px;
`;

export const EmailWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const EmailInput = styled.input`
  width: 70%;
  padding: 10px;
  margin-right: 10px;
`;

export const SubmitButton = styled.button`
  background-color: #ffc107;
  color: #343a40;
  padding: 10px;
  cursor: pointer;
  border: 1px solid #343a40;
  border-radius: 5px;
`;

export const CopyRight = styled.div`
  margin-top: 20px;
  text-align: left;
  color: #555;
  font-size: 13px;
`;

export const RightSection = styled.div`
  flex: 1;
  max-width: 400px;
`;

export const ShopTitle = styled.h3`
  margin-bottom: 10px;
`;

export const SelectBox = styled.select`
  width: 70%;
  padding: 10px;
  margin-bottom: 13px;
`;

export const InquiryTitle = styled.h3`
  margin-bottom: 2px;
`;

export const InquirySubtitle = styled.p`
  font-size: 13px;
`;

export const SNSIcons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

export const SNSIcon = styled.a`
  margin-left: 10px;
  color: #555;
  font-size: 18px;
  transition: color 0.3s ease;
`;

export const SNSIcon1 = styled(FaFacebookF)`
  font-size: 0.8rem;
  margin-top: 1px;
  margin-right: 7px;
`;

export const SNSIcon2 = styled(FaTwitter)`
  font-size: 1rem;
  margin-right: 7px;
`;

export const SNSIcon3 = styled(FaInstagram)`
  font-size: 1rem;
`;

export const EmailSentPopup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  p {
    margin-bottom: 10px;
  }

  button {
    background-color: #ffc107;
    color: #343a40;
    padding: 10px;
    cursor: pointer;
    border: 1px solid #343a40;
    border-radius: 5px;
  }
`;
