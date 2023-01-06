import styled from 'styled-components/macro';
import { primaryColor, tintPrimaryColor } from '../../../globalStyles';

export const Header = styled.header`
  height: ${({ isActive }) => (isActive ? '100vh' : '')};
`;

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${primaryColor};
  padding: 2rem 4rem;

  @media (max-width: 999px) {
    flex-direction: column;
  }
`;

export const Logo = styled.h1`
  font-size: 3rem;
  color: #fff;
  cursor: pointer;
  & a {
    color: #fff;
  }
`;

export const BurgerNavContainer = styled.div`
  flex: 1;
  @media (max-width: 999px) {
    background-color: ${tintPrimaryColor};
    transform: ${(props) => (props.isActive ? 'translateX(0%)' : 'translateX(100%)')};
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
    padding: 2rem;
    transition: transform 0.8s;
  }
`;

export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  column-gap: 3rem;
  justify-content: space-between;

  @media (max-width: 999px) {
    flex-direction: column;
    row-gap: 3rem;
  }
`;

export const Li = styled.li`
  color: #fff;
  font-size: 2rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0.5rem;
`;

export const BurgerButton = styled.button`
  display: none;
  @media (max-width: 999px) {
    display: initial;
    font-size: 3rem;
    background-color: transparent;
    border: none;
    color: #fff;
    padding: 1rem;
    &:active {
      background-color: ${tintPrimaryColor};
    }
  }
`;

export const BurgerInnerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 2;
  @media (max-width: 999px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const CloseButton = styled.button`
  display: none;
  @media (max-width: 999px) {
    display: initial;
    padding: 1rem;
    font-size: 3rem;
    background-color: transparent;
    border: none;
    color: #fff;

    &:active {
      background-color: ${primaryColor};
    }
  }
`;

export const BackButton = styled.span`
  font-size: 2rem;
  color: #fff;
  font-weight: 600;
`;
