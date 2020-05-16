import React from 'react'
import styled from 'styled-components'
import { animated, useSpring, config } from 'react-spring'

import { typeScale } from '../utils'
import { Illustrations, Close } from '../assets'
import { PrimaryButton } from './Buttons'

export const SignUpModal = ({ showModal, setShowModal }) => {
  const animation = useSpring({
    opacity: showModal ? 1 : 0,
    transform: showModal ? 'translateY(0)' : 'translateY(-200%)',
    config: config.slow,
  })

  return (
    <animated.div style={animation}>
      <ModalWrapper>
        <img
          src={Illustrations.SignUp}
          alt='Sign up for an account'
          aria-hidden='true'
        />
        <SignUpHeader>Sign Up</SignUpHeader>
        <SignUpText>Sign up today to get access!</SignUpText>
        <PrimaryButton>Sign Up</PrimaryButton>
        <CloseModalButton
          aria-label='Close Modal'
          onClick={() => setShowModal(prevState => !prevState)}
        >
          <Close />
        </CloseModalButton>
      </ModalWrapper>
    </animated.div>
  )
}

const ModalWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.formElementBackground};
  width: 800px;
  height: 500px;
  border-radius: 2px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  color: ${({ theme }) => theme.textOnFormElementBackground};
`

const SignUpHeader = styled.h3`
  font-size: ${typeScale.header3};
`

const SignUpText = styled.p`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
`

const CloseModalButton = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  background: none;
  width: 40px;
  height: 40px;
  padding: 0;
  border: none;
  cursor: pointer;
`
