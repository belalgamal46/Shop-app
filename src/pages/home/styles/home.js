import styled from 'styled-components/macro';

export const Main = styled.main`
  padding: 10rem;
  display: flex;
  flex-direction: column;
  row-gap: 7rem;
  background-color: #5586e3;

  @media (max-width: 600px) {
    padding: ${({ isActive }) => (isActive ? '0' : '2rem')};
  }
`;

export const Title = styled.h2`
  font-size: 5rem;
  color: #fff;

  @media (max-width: 999px) {
    display: ${({ isActive }) => (isActive ? 'none' : 'initial')};
  }
`;
