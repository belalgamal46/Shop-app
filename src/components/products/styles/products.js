import styled from 'styled-components/macro';

export const Container = styled.section`
  background-color: #5586e3;
  @media (max-width: 999px) {
    display: ${({ isActive }) => (isActive ? 'none' : 'initial')};
  }
`;
export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  list-style: none;
  gap: 2rem;

  @media (min-width: 1400px) {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Spinner = styled.h2`
  font-size: 4rem;
  color: #fff;
`;
