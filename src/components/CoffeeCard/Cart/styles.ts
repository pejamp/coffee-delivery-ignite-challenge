import styled from 'styled-components'

export const CartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.5rem 0.25rem;
  background-color: ${(props) => props.theme['base-200']};
`

export const CartInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const CartActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const CartName = styled.span`
  font-size: 1rem;
  color: ${(props) => props.theme['base-800']};
  text-transform: capitalize;
  margin-bottom: 0.5rem;
  display: inline-block;
`

export const PriceTag = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: ${(props) => props.theme['base-700']};
`

export const CartButton = styled.button`
  min-height: 2rem;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 0.5rem;
  cursor: pointer;

  border-radius: 6px;
  background-color: ${(props) => props.theme['base-400']};
  border: 0;

  font-size: 0.75rem;
  text-transform: uppercase;
  color: ${(props) => props.theme['base-700']};
  line-height: 1.6;

  transition: background-color 250ms ease-in;

  svg {
    color: ${(props) => props.theme['purple-500']};
  }

  &:hover {
    background-color: ${(props) => props.theme['base-500']};
  }
`
