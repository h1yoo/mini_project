import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

export const Logo = styled.div`
  font-size: 1.7rem;
  font-weight: bold;
  margin-right: 0.5rem;
  a {
    color: #343a40;
    text-decoration: none;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;

  a {
    color: #343a40;
    text-decoration: none;
    margin-left: 8px;
  }

  a + a {
    margin-left: 16px;
  }
`;

export const NavLink = styled(Link)`
  &:hover {
    color: #000;
    font-weight: bold;
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  margin-right: 60px;
`;

export const CartButton = styled.button`
  margin-left: 20px;
  padding: 5px 10px;
  color: #343a40;
  background-color: transparent;
  border: 1px solid #343a40;
  cursor: pointer;
`;

export const UserIcon = styled(FaUserCircle)`
  font-size: 1.5rem;
`;

export default styled;
