import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 100%;
  max-width: 2880px;
  margin: 0 auto;
`;

export const MainPageContainer = styled.div`
  width: 100%;
  margin-top: 60px;
  max-width: 2880px;
  color: #334748;
  margin-left: auto;
  margin-right: auto;
`;

export const MainPageTitle = styled.h1`
  font-size: 4rem;
  padding: 50px 0 0 30px;
  margin-bottom: 20px;
  line-height: 1.2;
`;

export const MainPageSubtitle = styled.p`
  font-size: 1rem;
  font-weight: 500;
  padding: 0 30px 0 30px;
  margin-bottom: 20px;
`;

export const MainPageImage = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
  margin-top: 15px;
`;

export const SubscriptionTitle = styled.h1`
  font-size: 4rem;
  padding: 50px 0 15px 90px;
  margin-bottom: 10px;
  line-height: 1.2;
`;

export const SubscriptionBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1000px;
    height: 600px;
    background-color: white;
    z-index: 1;
  }
`;

export const SubscriptionContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;
  max-width: 100%;
`;

export const SubscriptionTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 850px;
  margin-bottom: 20px;
`;

export const SubscriptionText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin: 0 40px;
  position: relative;

  &:not(:last-child) {
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      right: -30%;
      transform: translateY(-50%);
      height: 100%;
      border-right: 1px solid #ccc;
      opacity: 0.5;
    }
  }
`;

export const SubscriptionTextNumber = styled.span`
  font-size: 3rem;
  font-weight: 100;
  color: #334748;
  margin-bottom: 20px;
`;

export const SubscriptionTextIcon = styled.span`
  font-size: 4rem;
  margin-bottom: 20px;
  color: #6d4b37;
`;

export const SubscriptionTextDescription = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #334748;
`;

export const SubscriptionButton = styled.button`
  background-color: #6d4b37;
  color: #fff;
  padding: 10px 30px;
  border: none;
  border-radius: 30px;
  font-size: 1.7rem;
  margin-top: 50px;
  cursor: pointer;
  z-index: 2;

  &:hover {
    background-color: #573826;
  }
`;

export const SubscriptionImage = styled.img`
  width: 90%;
  height: auto;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  display: block;
`;

export default styled;
