import styled, { css } from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 3rem 0;
  height: 10.4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  & a {
    font-size: 3rem;
    margin: 3rem;
    color: ${({ theme }) => theme.colors['1-color']};
  }
`;
