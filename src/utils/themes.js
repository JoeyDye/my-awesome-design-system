import { purple, blue, neutral, yellow, red, green } from './colors'
import { primaryFont } from './typography'

export const defaultTheme = {
  primaryColor: purple[100],
  primaryColorHover: blue[100],
  primaryColorActive: blue[100],
  secondaryButtonText: purple[100],
  textColorOnPrimary: neutral[100],
  textColor: neutral[100],
  textColorInverted: neutral[100],
  disabled: neutral[400],
  textOnDisabled: neutral[100],
  formElementBackground: neutral[100],
  textOnFormElementBackground: neutral[600],
  primaryFont,

  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],
  },
}
export const darkTheme = {
  primaryColor: neutral[100],
  primaryColorHover: neutral[200],
  primaryColorActive: neutral[100],
  secondaryButtonText: purple[200],
  textColorOnPrimary: blue[200],
  textColor: blue[200],
  textColorInverted: neutral[100],
  disabled: neutral[400],
  textOnDisabled: neutral[300],
  formElementBackground: blue[100],
  textOnFormElementBackground: neutral[100],
  primaryFont,

  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],
  },
}
