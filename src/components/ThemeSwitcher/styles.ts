import styled, { css } from 'styled-components';

export const ThemeSwitcherContainer = styled.label`
  position: fixed;
  bottom: 20px;
  display: block;
  right: 40px;
  width: 7.2rem;
  padding: 4px;
  border-radius: 22px;
  background-color: ${({ theme }) => theme.colors['base-button']};
  cursor: pointer;

  span {
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors['5-color']};
    transition: 0.3s cubic-bezier(0.18, 0.69, 0.35, 1.15);
  }

  & input {
    position: absolute;
    transform: scale(0);
  }

  & input:checked ~ span {
    transform: translateX(34px);
  }
`;
