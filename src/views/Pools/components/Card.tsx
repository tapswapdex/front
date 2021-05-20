import styled from 'styled-components'

const Card = styled.div<{ isActive?: boolean; isFinished?: boolean }>`
  background: ${(props) => props.theme.card.background};
  box-shadow: rgb(20 1 8 / 15%) -2px 2px 4px inset, rgb(255 255 255) 2px -2px 4px inset;
  border-radius: 32px;
  display: flex;
  color: ${({ isFinished, theme }) => theme.colors[isFinished ? 'textDisabled' : 'secondary']};
  box-shadow: ${({ isActive }) =>
    isActive
      ? '0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4);'
      : 'rgb(20 1 8 / 15%) -2px 2px 4px inset, rgb(255 255 255) 2px -2px 4px inset'};
  flex-direction: column;
  position: relative;
`

export default Card
