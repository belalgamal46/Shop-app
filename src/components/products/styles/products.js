import styled from 'styled-components/macro';
import { primaryColor } from '../../../globalStyles';

export const Container = styled.section`
  background-color: ${primaryColor};
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

  @media (max-width: 280px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }
`;
