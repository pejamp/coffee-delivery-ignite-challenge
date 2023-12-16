import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  max-width: 70rem;
  margin: 2.5rem auto;
`

export const FormContainer = styled.form`
  display: flex;
  align-items: flex-start;
  gap: 32px;

  h1 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-800']};
  }
`

export const FormCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 2.5rem;

  border-radius: 6px;
  background-color: ${(props) => props.theme['base-200']};

  & + & {
    margin-top: 12px;
  }
`

export const FormHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;

  svg {
    color: ${(props) => props.theme['yellow-800']};
  }

  span {
  }
`
