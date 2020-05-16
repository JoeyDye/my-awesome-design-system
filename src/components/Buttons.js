import styled from 'styled-components'
import { defaultTheme, typeScale } from '../utils'

export const Button = styled.button`
  min-width: 100px;
  border-radius: 50px;
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  transition: background-color 0.2s linear, color 0.2s linear;

  &:focus {
    color: ${defaultTheme.textColor};
    outline: 3px solid ${defaultTheme.primaryColor};
    outline-offset: 2px;
  }
`

export const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  border: none;
  color: ${defaultTheme.textColor};

  &:hover {
    background-color: ${defaultTheme.primaryColorHover};
    color: ${defaultTheme.textColorOnPrimary};
  }

  &:focus {
    background-color: ${defaultTheme.primaryColorHover};
  }

  &:active {
    background-color: ${defaultTheme.primaryColorActive};
    border-color: ${defaultTheme.primaryColorActive};
    color: ${defaultTheme.textColorOnPrimary};
  }

  &:disabled {
    background-color: ${defaultTheme.disabled};
    color: ${defaultTheme.textOnDisabled};
    cursor: not-allowed;
  }
`

export const SecondaryButton = styled(Button)`
  background-color: white;
  border: 1px solid ${defaultTheme.primaryColor};
  color: ${defaultTheme.primaryColor};

  &:hover {
    background-color: ${defaultTheme.primaryColor};
    color: ${defaultTheme.textColor};
  }

  &:focus {
    background-color: ${defaultTheme.primaryColor};
  }

  &:active {
    background-color: ${defaultTheme.primaryColor};
    border-color: ${defaultTheme.primaryColor};
    color: ${defaultTheme.textColor};
  }

  &:disabled {
    background: none;
    border: 1px solid ${defaultTheme.disabled};
    color: ${defaultTheme.disabled};
    cursor: not-allowed;
  }
`

export const TertiaryButton = styled(Button)`
  background-color: white;
  border: none;
  color: ${defaultTheme.primaryColor};

  &:hover {
    background-color: ${defaultTheme.primaryColor};
    color: white;
  }

  &:focus {
    background-color: ${defaultTheme.primaryColor};
  }

  &:active {
    background-color: ${defaultTheme.primaryColor};
    border-color: ${defaultTheme.primaryColor};
    color: ${defaultTheme.textColor};
  }

  &:disabled {
    background: none;
    color: ${defaultTheme.disabled};
    cursor: not-allowed;
  }
`
