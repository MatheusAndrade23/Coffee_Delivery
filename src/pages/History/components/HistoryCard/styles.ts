import styled, { css } from 'styled-components';

export const HistoryCardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors['base-card']};
  width: 100%;
  padding: 2rem;
  border-radius: 5px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fonts.sizes.small4};
  color: ${({ theme }) => theme.colors['base-text']};

  & svg {
    padding: 0.5rem;
    background-color: ${({ theme }) => theme.colors['1-color']};
    color: ${({ theme }) => theme.colors['base-light-color']};
    font-size: 30px;
    border-radius: 5px;
    margin-right: 1rem;
  }

  & p {
    margin-left: 1rem;
  }

  & span {
    font-weight: bold;
    color: ${({ theme }) => theme.colors['base-light-color']};
    padding: 0.5rem 1rem;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors['5-color']};
  }

  & > div {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
  }

  & > div:last-child p {
    background-color: ${({ theme }) => theme.colors['base-button']};
    padding: 0.5rem 1rem 0.5rem 0;
    border-radius: 5px;
  }
`;
