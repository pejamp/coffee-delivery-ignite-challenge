import styled from 'styled-components'

export const CartContainer = styled.div`
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
`

export const CoffeeCards = styled.div`
  display: flex;
  flex-direction: column;
`

export const Divider = styled.div`
  height: 1px;
  background-color: ${(props) => props.theme['base-400']};
  margin: 1.5rem 0;
`

interface TotalItemProps {
  $totalSum?: boolean
}

export const TotalItem = styled.div.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith('$'),
})<TotalItemProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme['base-700']};

  span {
    font-size: ${(props) => (props.$totalSum ? '1.25rem' : '1rem')};
  }

  font-size: ${(props) => (props.$totalSum ? '1.25rem' : '0.875rem')};
  font-weight: ${(props) => (props.$totalSum ? '700' : '400')};
  color: ${(props) =>
    props.$totalSum ? props.theme['base-800'] : props.theme['base-700']};
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
