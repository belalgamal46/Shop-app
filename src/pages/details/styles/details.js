import styled from 'styled-components/macro';

export const Container = styled.section`
  display: flex;
  column-gap: 5rem;
  padding: 10rem;

  @media (max-width: 999px) {
    display: ${({ isActive }) => (isActive ? 'none' : 'flex')};
  }

  @media (max-width: 950px) {
    flex-direction: column;
    row-gap: 5rem;
  }

  @media (max-width: 550px) {
    padding: 2rem;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: flex-end;
  padding: 3rem;
  background-color: #fff;
  border-radius: 2rem;
  flex: 1;
  max-height: 600px;

  @media (max-width: 950px) {
    max-height: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  row-gap: 2rem;
  color: #fff;
`;

export const Title = styled.h2`
  font-size: 4rem;
  font-weight: 800;

  @media (max-width: 550px) {
    font-size: 3rem;
  }
`;

export const Description = styled.p`
  font-size: 3rem;
  font-weight: 300;
  @media (max-width: 550px) {
    font-size: 2rem;
  }
`;

export const Price = styled.span`
  font-size: 2rem;
`;

export const Category = styled.span`
  font-size: 2rem;
`;

export const Rate = styled.span`
  font-size: 2rem;
`;
