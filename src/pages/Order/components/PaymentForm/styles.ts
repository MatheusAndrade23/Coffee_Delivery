import styled, { css, ThemedStyledProps, ThemeProps } from 'styled-components';
import { ThemeType } from '../../../../@types/styled';

export const PaymentFormContainer = styled.div`
  width: 64rem;

  & h2 {
    color: ${({ theme }) => theme.colors['base-subtitle']};
    font-size: ${({ theme }) => theme.fonts.sizes.medium};
    margin: 1rem;
  }

  @media (max-width: 680px) {
    width: 100%;
  }
`;

export const AddressForm = styled.form`
  width: 100%;
  padding: 3rem;
  min-height: 37.2rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors['base-card']};
  display: flex;
  flex-direction: column;

  & input {
    border-radius: 5px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: ${({ theme }) => theme.fonts.sizes.small3};
    color: ${({ theme }) => theme.colors['base-title']};
    background-color: ${({ theme }) => theme.colors['base-input']};
    border: 1px solid ${({ theme }) => theme.colors['base-button']};

    &:focus {
      border-color: ${({ theme }) => theme.colors['1-color']};
    }

    &:disabled:hover {
      cursor: not-allowed;
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  & input:not(:first-child) {
    margin-left: 1rem;
  }

  & input:first-child {
    width: 25%;
  }

  & input:nth-child(2) {
    width: 75%;
  }

  & input:nth-child(3) {
    width: 20%;
  }
`;

export const FormTitle = styled.div`
  min-height: 4.4rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 2rem;

  & h4 {
    font-family: ${({ theme }) => theme.fonts.family.primary};
    color: ${({ theme }) => theme.colors['base-subtitle']};
    font-size: ${({ theme }) => theme.fonts.sizes.small4};
    margin-bottom: 0.5rem;
  }

  & span {
    color: ${({ theme }) => theme.colors['base-text']};
    font-size: ${({ theme }) => theme.fonts.sizes.small3};
  }

  & svg {
    font-size: 2rem;
    margin-right: 1rem;
    color: ${({ theme }) => theme.colors['5-color']};

    & path {
      stroke: ${({ theme }) => theme.colors['1-color']};
    }
  }
`;

export const PaymentPreference = styled.div`
  width: 100%;
  padding: 3rem;
  min-height: 20.7rem;
  border-radius: 5px;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.colors['base-card']};

  & > div:nth-child(2) {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
  }
`;

type PaymentButtonProps = {
  selected: boolean;
  theme: ThemeType;
};

type ValidFieldProps = {
  valid: boolean;
  theme: ThemeType;
};

export const PaymentPreferenceButton = styled.button`
  height: 5.1rem;
  margin: 5px;
  min-width: 18rem;
  border-radius: 5px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors['base-button']};
  color: ${({ theme }) => theme.colors['base-text']};
  text-transform: uppercase;
  transition: 0.25s;

  ${({ selected, theme }: PaymentButtonProps) =>
    ButtonSelected(selected, theme)};

  & svg {
    color: ${({ theme }) => theme.colors['5-color']};
    font-size: 2rem;
    margin-right: 0.5rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors['base-hover']};
  }
`;

const ButtonSelected = (selected: boolean, theme: ThemeType) => css`
  border: ${selected ? '1px solid' : 'none'};
  border-color: ${selected && theme.colors['5-color']};
`;

export const Validation = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  font-size: ${({ theme }) => theme.fonts.sizes.small3};
  justify-content: space-between;
  margin-top: 10px;

  @media (max-width: 680px) {
    justify-content: center;
  }
`;

export const FieldValidation = styled.p`
  width: max-content;
  min-width: 50%;
  margin: 5px 0;
  display: flex;
  align-items: center;
  text-align: justify;

  ${({ theme, valid }: ValidFieldProps) => isFieldValidColor(valid, theme)}

  & svg {
    margin-left: 10px;
  }
`;

const isFieldValidColor = (valid: boolean, theme: ThemeType) => css`
  color: ${valid ? theme.colors['green-color'] : theme.colors['red-color']};
`;
