import styled from 'styled-components'

export const InputContainer = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 1rem;
  cursor: pointer;

  border-radius: 6px;
  border: 1px solid transparent;
  background-color: ${(props) => props.theme['base-400']};

  font-size: 0.75rem;
  line-height: 1.6;
  text-transform: uppercase;
  color: ${(props) => props.theme['base-700']};

  transition: background-color 250ms ease-in;

  input {
    display: none;
  }

  svg {
    color: ${(props) => props.theme['purple-500']};
  }

  &:hover {
    background-color: ${(props) => props.theme['base-500']};
  }

  &:has(input:checked) {
    border-color: ${(props) => props.theme['purple-500']};
    background-color: ${(props) => props.theme['purple-100']};
  }
`
