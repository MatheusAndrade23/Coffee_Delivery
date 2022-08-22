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
  margin-top: 3rem;
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

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors['1-color']};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const CartEmptyMessage = styled.div`
  width: 36.8rem;
  height: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.25s;
  border: double 1px transparent;
  border-image-slice: 1;
  border-radius: 10px;
  background-image: linear-gradient(
      ${({ theme }) => theme.colors['base-card']},
      ${({ theme }) => theme.colors['base-card']}
    ),
    radial-gradient(
      circle at top left,
      ${({ theme }) => theme.colors['1-color']},
      ${({ theme }) => theme.colors['4-color']}
    );
  background-origin: border-box;
  background-clip: content-box, border-box;

  & h2 {
    font-weight: normal;
    font-family: ${({ theme }) => theme.fonts.family.primary};
    color: ${({ theme }) => theme.colors['base-text']};
  }

  & a {
    color: ${({ theme }) => theme.colors['5-color']};
    text-decoration: underline;
    font-size: ${({ theme }) => theme.fonts.sizes.small3};

    &:hover {
      color: ${({ theme }) => theme.colors['4-color']};
    }
  }
`;

export const CoffeesList = styled.div`
  min-height: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  & > div {
    margin-top: 4rem;
  }
`;
