import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { SignUpModal, PrimaryButton } from './components'
import { GlobalStyle, darkTheme, defaultTheme } from './utils'

const App = () => {
  const [theme, setTheme] = useState('defaultTheme')
  const [showModal, setShowModal] = useState(false)

  return (
    <ThemeProvider theme={theme === 'darkTheme' ? darkTheme : defaultTheme}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around',
          background:
            theme === 'darkTheme'
              ? defaultTheme.primaryColor
              : darkTheme.primaryColor,
          width: '100vw',
          height: '100vh',
        }}
      >
        <div>
          <button
            style={{
              margin: '0 16px 24px',
              padding: '8px',
              background: 'none',
            }}
            onClick={() =>
              setTheme(prevState =>
                prevState === 'defaultTheme' ? 'darkTheme' : 'defaultTheme'
              )
            }
          >
            Change theme
          </button>
          <PrimaryButton onClick={() => setShowModal(prevState => !prevState)}>
            Show Modal
          </PrimaryButton>
        </div>
        <SignUpModal showModal={showModal} setShowModal={setShowModal} />
        <GlobalStyle />
      </div>
    </ThemeProvider>
  )
}

export default App
