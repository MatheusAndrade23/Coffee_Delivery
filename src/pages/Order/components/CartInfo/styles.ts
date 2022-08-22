import styled, { css } from 'styled-components';

export const CartInfoContainer = styled.div`
  & h2 {
    color: ${({ theme }) => theme.colors['base-subtitle']};
    font-size: ${({ theme }) => theme.fonts.sizes.medium};
    margin: 1rem;
  }
`;

export const CartList = styled.div`
  min-height: 49.8rem;
  width: 44.8rem;
  border-radius: 5px 30px;
  background-color: ${({ theme }) => theme.colors['base-card']};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const PriceInfo = styled.div`
  height: 9.2rem;
  width: 36.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const PriceTag = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  & p {
    color: ${({ theme }) => theme.colors['base-text']};
    font-size: ${({ theme }) => theme.fonts.sizes.small3};
  }

  & span {
    font-size: ${({ theme }) => theme.fonts.sizes.small4};
  }

  & h5,
  h5 > span {
    color: ${({ theme }) => theme.colors['base-text']};
    font-family: ${({ theme }) => theme.fonts.family.primary};
    font-size: ${({ theme }) => theme.fonts.sizes.medium2};
  }
`;

export const CompleteOrderButton = styled.button`
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  width: 36.8rem;
  height: 4.6rem;
  color: ${({ theme }) => theme.colors['base-light-color']};
  background-color: ${({ theme }) => theme.colors['2-color']};
  transition: 0.25s;

  &:hover {
    background-color: ${({ theme }) => theme.colors['1-color']};
  }
`;
