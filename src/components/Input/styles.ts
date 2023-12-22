import styled from 'styled-components'

interface InputContainerProps {
  $error?: boolean
}

export const InputContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith('$'),
})<InputContainerProps>`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0.75rem;

  border-radius: 4px;
  border: 1px solid
    ${(props) => (props.$error ? '#BF1650' : props.theme['base-400'])};
  background-color: ${(props) => props.theme['base-300']};

  input {
    flex: 1;
    background: transparent;
    border: 0;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-700']};
    box-shadow: none;

    &::placeholder {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-600']};
    }
  }

  &:has(input:focus) {
    border-color: ${(props) => props.theme['yellow-800']};
  }
`

export const OptionalTip = styled.span`
  font-size: 0.75rem;
  font-style: italic;
  color: ${(props) => props.theme['base-600']};
`
