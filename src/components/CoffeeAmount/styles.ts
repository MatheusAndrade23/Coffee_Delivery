import styled, { css } from 'styled-components';

export const CoffeeAmountContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  width: 7rem;
  height: 3.2rem;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors['base-button']};

  & span {
    color: ${({ theme }) => theme.colors['base-title']};
    font-size: ${({ theme }) => theme.fonts.sizes.small4};
  }

  & button {
    color: ${({ theme }) => theme.colors['5-color']};
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    width: 3rem;
    height: 3.2rem;
    transition: 0.25s;

    & svg {
      font-size: 1.5rem;
    }

    &:hover {
      color: ${({ theme }) => theme.colors['4-color']};
    }
  }
`;
