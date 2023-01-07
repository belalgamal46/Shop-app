import styled from 'styled-components/macro';
import { tintPrimaryColor } from '../../../globalStyles';

export const Container = styled.li`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 3.5rem;
  padding: 2.5rem;
  justify-content: space-between;
  border-radius: 1rem;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.4);
    transform: scale(1.03);
  }

  &:active {
    background-color: ${tintPrimaryColor};
  }
`;

export const DetailsContainer = styled.div`
  align-self: flex-start;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 1rem;
`;

export const InnerDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 3rem;
  justify-content: space-between;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 250px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const Title = styled.h2`
  font-size: 2rem;
`;

export const Price = styled.span`
  font-size: 1.5rem;
`;

export const Rating = styled.span`
  font-size: 1.5rem;
`;
