import React from 'react'
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from './components/Buttons'
import { GlobalStyle } from './utils'

const App = () => {
  return (
    <div>
      <PrimaryButton disabled>Submit</PrimaryButton>
      <SecondaryButton disabled>Submit</SecondaryButton>
      <TertiaryButton disabled>Submit</TertiaryButton>
      <GlobalStyle />
    </div>
  )
}

export default App
