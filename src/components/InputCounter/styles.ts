import styled from 'styled-components'

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 0.5rem;
  min-height: 2.375rem;

  border-radius: 6px;
  background-color: ${(props) => props.theme['base-400']};

  span {
    width: 1.25rem;
    text-align: center;
    color: ${(props) => props.theme['base-900']};
    font-size: 1rem;
  }
`

export const CounterButton = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  color: ${(props) => props.theme['purple-500']};

  transition: color 250ms ease-in;

  &:hover {
    color: ${(props) => props.theme['purple-800']};
  }
`
