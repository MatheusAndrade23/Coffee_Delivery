import styled, { css } from 'styled-components';

export const SuccessfulOrderContainer = styled.section`
  width: 100%;
  min-height: calc(100% - 20.4rem);
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;

  & img {
    max-width: 49.2rem;
    width: 100%;
  }

  @media (max-width: 1550px) {
    justify-content: center;
    min-height: calc(100% - 35.4rem);
  }
`;

export const Info = styled.div`
  margin-bottom: 12rem;

  & h2 {
    color: ${({ theme }) => theme.colors['1-color']};
    font-size: ${({ theme }) => theme.fonts.sizes.huge};
  }

  & p {
    color: ${({ theme }) => theme.colors['base-subtitle']};
    font-size: ${({ theme }) => theme.fonts.sizes.medium2};
  }

  & > div {
    width: 100%;
    height: 27rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    margin-top: 4rem;
    border: double 1px transparent;
    border-image-slice: 1;
    border-radius: 5px 30px;
    background-image: linear-gradient(
        ${({ theme }) => theme.colors['base-background']},
        ${({ theme }) => theme.colors['base-background']}
      ),
      radial-gradient(
        circle at top left,
        ${({ theme }) => theme.colors['1-color']},
        ${({ theme }) => theme.colors['4-color']}
      );
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  & div:first-child svg {
    background-color: ${({ theme }) => theme.colors['5-color']};
  }

  & div:nth-child(2) svg {
    background-color: ${({ theme }) => theme.colors['2-color']};
  }

  @media (max-width: 1550px) {
    margin: 0;
    height: max-content;
  }
`;

export const InfoTag = styled.div`
  margin-left: 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;

  & > div {
    display: flex;
    flex-direction: column;
    height: 4.2rem;
    margin-left: 1rem;

    & span {
      font-size: ${({ theme }) => theme.fonts.sizes.small4};
      color: ${({ theme }) => theme.colors['base-text']};
      font-weight: bold;
    }

    & p {
      font-size: ${({ theme }) => theme.fonts.sizes.small4};
      color: ${({ theme }) => theme.colors['base-text']};
    }
  }

  & svg {
    border-radius: 50%;
    padding: 0.8rem;
    font-size: 3rem;
    background-color: ${({ theme }) => theme.colors['1-color']};
  }

  & path {
    color: ${({ theme }) => theme.colors['base-light-color']};
  }
`;

export const NoCompleteOrderMessage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30rem;
  text-align: center;

  & h2 {
    color: ${({ theme }) => theme.colors['1-color']};
    font-size: ${({ theme }) => theme.fonts.sizes.huge};
  }
`;
