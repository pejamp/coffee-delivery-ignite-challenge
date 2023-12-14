import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  max-width: 70rem;
  margin: 0 auto;
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  a {
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    background-color: ${(props) => props.theme['yellow-100']};

    svg {
      width: 22px;
      height: 22px;
      color: ${(props) => props.theme['yellow-800']};
    }
  }
`

export const LocationButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['purple-100']};
  border: 0;

  span {
    color: ${(props) => props.theme['purple-800']};
    font-size: 0.875rem;
  }

  svg {
    width: 22px;
    height: 22px;
    color: ${(props) => props.theme['purple-800']};
  }
`
