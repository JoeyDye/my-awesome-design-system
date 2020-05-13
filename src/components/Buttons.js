import styled from 'styled-components'
import { defaultTheme, typeScale } from '../utils'

export const Button = styled.button`
  min-width: 100px;
  border-radius: 50px;
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
`

export const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  border: none;
  color: white;

  &:hover {
    background: ${defaultTheme.primaryColorHover};
  }
`

export const SecondaryButton = styled(Button)`
  background-color: white;
  border: 1px solid ${defaultTheme.primaryColor};
  color: ${defaultTheme.primaryColor};

  &:hover {
    background-color: ${defaultTheme.primaryColor};
    color: white;
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
`
