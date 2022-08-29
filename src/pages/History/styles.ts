import styled, { css } from 'styled-components';

export const HistoryContainer = styled.section`
  min-height: 90vh;

  & h3 {
    color: ${({ theme }) => theme.colors['base-text']};
    font-size: ${({ theme }) => theme.fonts.sizes.big};
    margin: 2rem 0;
  }

  & h2 {
    margin-top: 10rem;
  }
`;
