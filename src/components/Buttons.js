import styled from 'styled-components'

export const Button = styled.button`
  min-width: 100px;
  border-radius: 2px;
  padding: 12px 24px;
  font-size: 1rem;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
`

export const PrimaryButton = styled(Button)`
  background-color: red;
  border: none;
  color: white;
  font-size: 1rem;
`

export default PrimaryButton
