import styled, { css } from 'styled-components';

export const HalfCoffeeCardContainer = styled.div`
  height: 8rem;
  width: 36.8rem;
  padding: 0 0.8rem;
  background-color: ${({ theme }) => theme.colors['base-card']};
  border-bottom: 1px solid ${({ theme }) => theme.colors['base-button']};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 4rem;
  margin-top: 1rem;

  & img {
    width: 6.4rem;
  }

  & > div {
    height: 6.4rem;
    width: 27.5rem;
    margin-left: 2rem;
  }
`;

export const CoffeeInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 3.2rem;

  h6 {
    font-weight: normal;
    font-size: ${({ theme }) => theme.fonts.sizes.small4};
    font-family: ${({ theme }) => theme.fonts.family.primary};
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }

  p {
    color: ${({ theme }) => theme.colors['base-text']};
    font-size: ${({ theme }) => theme.fonts.sizes.small4};
    font-weight: bold;
  }
`;

export const CoffeeSale = styled.div`
  display: flex;
  flex-direction: row;
  height: 3.2rem;
`;

export const Remove = styled.button`
  width: 9.1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  background-color: ${({ theme }) => theme.colors['base-button']};
  border-radius: 5px;
  margin-left: 1rem;
  border: none;
  transition: 0.25s;

  &:hover {
    background-color: ${({ theme }) => theme.colors['base-hover']};
  }

  & span {
    font-size: ${({ theme }) => theme.fonts.sizes.small2};
    color: ${({ theme }) => theme.colors['base-text']};
    margin-bottom: 0.8rem;
    margin-left: 0.5rem;
  }

  & svg {
    color: ${({ theme }) => theme.colors['5-color']};
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
  }
`;
