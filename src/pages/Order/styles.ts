import styled, { css } from 'styled-components';

export const OrderContainer = styled.main`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 3rem;

  @media (max-width: 1223px) {
    justify-content: center;
  }
`;
