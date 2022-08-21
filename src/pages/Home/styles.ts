import styled, { css } from 'styled-components';

export const HomeContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const HomeSection = styled.section`
  width: 100%;
  min-height: 54.4rem;
  display: flex;
  /* flex-flow: row wrap; */
  align-items: center;
  justify-content: space-between;

  & img {
    width: 47.6rem;
    height: 36rem;
  }
`;

export const HomeInfo = styled.div`
  height: 36rem;
  max-width: calc(100% - 50rem);

  & > div:first-child {
    display: flex;
    width: 100%;
    flex-direction: column;

    & h1 {
      color: ${({ theme }) => theme.colors['base-title']};
      font-size: ${({ theme }) => theme.fonts.sizes.xxhuge};
      width: 100%;
      line-height: 130%;
    }

    & p {
      margin-top: 2rem;
      color: ${({ theme }) => theme.colors['base-subtitle']};
      font-size: ${({ theme }) => theme.fonts.sizes.medium2};
    }
  }
`;

export const Advantages = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-flow: row wrap;

  & div {
    width: 50%;
    display: flex;
    align-items: center;
    margin-top: 2rem;

    & span {
      font-size: ${({ theme }) => theme.fonts.sizes.small4};
      color: ${({ theme }) => theme.colors['base-text']};
      margin-left: 1rem;
    }

    & svg {
      color: ${({ theme }) => theme.colors['base-light-color']};
      background-color: ${({ theme }) => theme.colors['1-color']};
      border-radius: 50%;
      font-size: 2.8rem;
      padding: 0.5rem;
    }
  }

  & div:nth-child(2) svg {
    background-color: ${({ theme }) => theme.colors['base-text']};
  }

  & div:nth-child(3) svg {
    background-color: ${({ theme }) => theme.colors['2-color']};
  }

  & div:nth-child(4) svg {
    background-color: ${({ theme }) => theme.colors['5-color']};
  }
`;

export const CoffeesSection = styled.section`
  width: 100%;

  & h3 {
    font-size: ${({ theme }) => theme.fonts.sizes.huge};
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }

  & > div {
    width: 100%;
    margin-top: 2rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    & > div {
      margin: 2rem 0;
    }
  }
`;