import styled, { css } from 'styled-components';

export const CoffeeCardContainer = styled.div`
  height: 31rem;
  width: 25.6rem;
  background-color: ${({ theme }) => theme.colors['base-card']};
  border-top-right-radius: 30px;
  border-top-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20rem;

  & img {
    margin-top: -7rem;
    width: 12rem;
    margin-bottom: 0.5rem;
  }
`;

export const CoffeeTags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;

  & span {
    padding: 5px 10px;
    color: ${({ theme }) => theme.colors['1-color']};
    background-color: ${({ theme }) => theme.colors['3-color']};
    border-radius: 15px;
    font-weight: bold;
    margin: 0.5rem;
  }
`;

export const CoffeeInfo = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 10px 0;

  & h6 {
    margin-bottom: 0.7rem;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }

  & p {
    color: ${({ theme }) => theme.colors['base-label']};
    font-size: 1.5rem;
  }
`;

export const CoffeeSale = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 1rem;

  & p {
    font-size: 1.3rem;
  }

  & p span {
    color: ${({ theme }) => theme.colors['base-title']};
    font-family: ${({ theme }) => theme.fonts.family.secondary};
    font-weight: bold;
    font-size: 2.2rem;
  }

  & svg {
    background-color: ${({ theme }) => theme.colors['4-color']};
    border-radius: 10px;
    color: white;
    padding: 0.7rem;
    font-size: 4rem;
  }
`;
