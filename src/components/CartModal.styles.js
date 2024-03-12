import styled, { keyframes } from 'styled-components';
import { MdKeyboardArrowRight } from 'react-icons/md';

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const CartModalBox = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  animation: ${slideIn} 0.3s ease-out;
  z-index: 2000;

  @media (max-width: 2880px) {
    width: 500px;
  }
`;

export const CartModalContent = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CartModalHeader = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 10px;
  width: 100%;
  position: sticky;
  text-align: center;
  background-color: #334748;
  padding: 15px;
`;

export const CartTitle = styled.h2`
  text-align: center;
  margin: 0 auto;
  color: #ecf0f1;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #333;
`;

export const ArrowIcon = styled(MdKeyboardArrowRight)`
  font-size: 2rem;
  color: white;
  margin-left: 10px;
`;

export const CartModalBody = styled.div`
  overflow-y: auto;
  max-height: calc(100% - 50px);
`;

export const EmptyCartMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #333;
  position: absolute;
  top: 100px;
  left: 60%;
  transform: translateX(-70%);
`;

export const TotalAmount = styled.p`
  text-align: center;
  margin-top: auto;
  font-size: 1.2rem;
  color: #333;
`;

export const CartViewButton = styled.button`
  width: 55%;
  margin: 0 auto;
  padding: 10px;
  margin-top: 30px;
  margin-bottom: 70px;
  background-color: #334748;
  color: #ecf0f1;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  border-radius: 30px;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
`;
