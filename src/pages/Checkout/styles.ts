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
    margin-bottom: 1rem;
  }
`

export const FormCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 2.5rem;
  min-width: 40rem;

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

  span {
    font-size: 1rem;
    color: ${(props) => props.theme['base-800']};
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-700']};
  }
`

export const FormInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const InputSizeBase = styled.div`
  display: grid;
  gap: 12px;
`

export const InputCEP = styled(InputSizeBase)`
  grid-template-columns: 12.5rem;
`

export const InputNumber = styled(InputSizeBase)`
  grid-template-columns: 12.5rem auto;
`

export const InputLocation = styled(InputSizeBase)`
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
`

export const FormSelects = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`
