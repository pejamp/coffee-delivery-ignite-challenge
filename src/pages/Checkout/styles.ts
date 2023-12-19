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

export const CoffeeAccount = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2.5rem;
  min-width: 28rem;

  border-radius: 6px 44px;
  background-color: ${(props) => props.theme['base-200']};
`

export const TotalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  //background-color: black;
`

interface TotalItemProps {
  totalsum?: boolean
}

export const TotalItem = styled('div').withConfig({
  shouldForwardProp: (prop) => prop === 'totalsum' || prop === 'children',
})<TotalItemProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme['base-700']};

  span {
    font-size: ${(props) => (props.totalsum ? '1.25rem' : '1rem')};
  }

  font-size: ${(props) => (props.totalsum ? '1.25rem' : '0.875rem')};
  font-weight: ${(props) => (props.totalsum ? '700' : '400')};
  color: ${(props) =>
    props.totalsum ? props.theme['base-800'] : props.theme['base-700']};
`

export const Divider = styled.div`
  height: 1px;
  background-color: ${(props) => props.theme['base-400']};
  margin: 1.5rem 0;
`

export const CoffeeCards = styled.div`
  display: flex;
  flex-direction: column;
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

export const BuyButton = styled.button`
  padding: 0.75rem 0.5rem;
  margin-top: 1.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['yellow-500']};
  border: 0;
  cursor: pointer;

  color: ${(props) => props.theme.white};
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.6;
  text-transform: uppercase;

  transition: background-color 250ms ease-in;

  &:hover {
    background-color: ${(props) => props.theme['yellow-800']};
  }
`

export const FormSelects = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`
