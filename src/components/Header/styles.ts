import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 10.4rem;
  padding: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 3.8rem;
    width: 23.3rem;

    & div {
      width: 14.3rem;
      height: 100%;
      border-radius: 5px;
      padding: 0 0.8rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: ${({ theme }) => theme.colors['6-color']};
      color: ${({ theme }) => theme.colors['4-color']};

      & span {
        font-size: ${({ theme }) => theme.fonts.sizes.small3};
      }

      & svg {
        font-size: 2rem;
      }

      & path {
        stroke: ${({ theme }) => theme.colors['4-color']};
      }
    }

    & a {
      position: relative;
      height: 100%;
      width: 3.8rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      font-size: 2.2rem;
      background-color: ${({ theme }) => theme.colors['3-color']};
      color: ${({ theme }) => theme.colors['1-color']};

      & span {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        top: -7px;
        right: -7px;
        color: ${({ theme }) => theme.colors['base-light-color']};
        background-color: ${({ theme }) => theme.colors['1-color']};
        font-size: ${({ theme }) => theme.fonts.sizes.small2};
        border-radius: 50%;
        width: 20px;
        height: 20px;
        text-align: center;
      }
    }
  }
`;
