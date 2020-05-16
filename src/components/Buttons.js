import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'

import { typeScale } from '../utils'

const BUTTON_MODIFIERS = {
  small: ({ theme }) => `
    font-size: ${typeScale.helperText};
    padding: 8px 24px;
  `,
  large: ({ theme }) => `
    font-size: ${typeScale.h5};
    padding: 16px 24px;
  `,
  warning: ({ theme }) => `
    background-color: ${theme.status.warningColor};
    color: ${theme.textColorInverted};

    &:hover,
    &:focus {
      background-color: ${theme.status.warningColorHover};
      outline: 3px solid ${theme.status.warningColorHover};
    }

    &:active {
      background-color: ${theme.status.warningColorActive};
    }
  `,
  primaryButtonWarning: ({ theme }) => `
    background-color: ${theme.status.warningColor};
    color: ${theme.textColorInverted};
  `,
  secondaryButtonWarning: ({ theme }) => `
    border: 2px solid ${theme.status.warningColor};
  `,
  error: ({ theme }) => `
    background: none;
    color: ${theme.status.errorColor};
    &:hover, &:focus {
      background-color: ${theme.status.errorColorHover};
      outline: 3px solid ${theme.status.errorColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${theme.status.errorColorActive};
    }
  `,
  primaryButtonError: ({ theme }) => `
    background-color: ${theme.status.errorColor};
    color: ${theme.textColorInverted};
  `,
  secondaryButtonError: ({ theme }) => `
    border: 2px solid ${theme.status.warningColor};
  `,
  success: ({ theme }) => `
    background: none;
    color: ${theme.status.successColor};
    &:hover, &:focus {
      background-color: ${theme.status.successColorHover};
      outline: 3px solid ${theme.status.successColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${theme.status.successColorActive};
    }
  `,
  primaryButtonSuccess: ({ theme }) => `
    background-color: ${theme.status.successColor};
    color: ${theme.textColorInverted};
  `,
  secondaryButtonSuccess: ({ theme }) => `
    border: 2px solid ${theme.status.successColor};
  `,
}

export const Button = styled.button`
  min-width: 100px;
  border-radius: 50px;
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  transition: background-color 0.2s linear, color 0.2s linear;

  &:focus {
    color: ${({ theme }) => theme.textColor};
    outline: 3px solid ${({ theme }) => theme.primaryColor};
    outline-offset: 2px;
  }
`

export const PrimaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.primaryColor};
  border: none;
  color: ${({ theme }) => theme.textColor};

  &:hover {
    background-color: ${({ theme }) => theme.primaryColorHover};
    color: ${({ theme }) => theme.textColorOnPrimary};
  }

  &:focus {
    background-color: ${({ theme }) => theme.primaryColorHover};
  }

  &:active {
    background-color: ${({ theme }) => theme.primaryColorActive};
    border-color: ${({ theme }) => theme.primaryColorActive};
    color: ${({ theme }) => theme.textColorOnPrimary};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.disabled};
    color: ${({ theme }) => theme.textOnDisabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`

export const SecondaryButton = styled(Button)`
  background-color: white;
  border: 1px solid ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.secondaryButtonText};

  &:hover {
    background-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.textColor};
  }

  &:focus {
    background-color: ${({ theme }) => theme.primaryColor};
  }

  &:active {
    background-color: ${({ theme }) => theme.primaryColor};
    border-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.textColor};
  }

  &:disabled {
    background: none;
    border: 1px solid ${({ theme }) => theme.disabled};
    color: ${({ theme }) => theme.disabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`

export const TertiaryButton = styled(Button)`
  background-color: white;
  border: none;
  color: ${({ theme }) => theme.secondaryButtonText};

  &:hover {
    background-color: ${({ theme }) => theme.primaryColor};
    color: white;
  }

  &:focus {
    background-color: ${({ theme }) => theme.primaryColor};
  }

  &:active {
    background-color: ${({ theme }) => theme.primaryColor};
    border-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.textColor};
  }

  &:disabled {
    background: none;
    color: ${({ theme }) => theme.disabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`
