import styled from 'styled-components'

export const IntroContainer = styled.section`
  background-image: url('/images/intro-background.png');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem 0;

  & > div {
    display: flex;
    align-items: flex-start;
    gap: 56px;
    max-width: 70rem;
  }

  img {
    width: 30rem;
  }
`

export const IntroContent = styled.div`
  h1 {
    color: ${(props) => props.theme['base-900']};
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    color: ${(props) => props.theme['base-800']};
    font-size: 1.25rem;
  }
`

export const ItemsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, auto);
  row-gap: 20px;
  column-gap: 40px;
  margin-top: 4rem;
`

interface ItemProps {
  $itemColors: string
}

export const Item = styled.li.withConfig({
  shouldForwardProp: (props) => props === '$itemColors' || props === 'children',
})<ItemProps>`
  display: flex;
  align-items: center;
  gap: 12px;

  color: ${(props) => props.theme['base-700']};
  font-size: 1rem;

  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme[props.$itemColors]};
    color: ${(props) => props.theme['base-100']};
  }
`

export const CoffeeSection = styled.section`
  max-width: 70rem;
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  margin: 2rem auto;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h2 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme['base-800']};
  }

  nav ul {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`

export const CheckboxTag = styled.label`
  padding: 6px 12px;
  border-radius: 100px;
  border: 1px solid ${(props) => props.theme['yellow-500']};
  background: transparent;
  cursor: pointer;

  font-size: 0.625rem;
  text-transform: uppercase;
  font-weight: 700;
  color: ${(props) => props.theme['yellow-800']};

  transition: all 250ms ease-in;

  &:hover {
    background-color: ${(props) => props.theme['yellow-100']};
    border-color: transparent;
  }

  &:has(input:checked) {
    background-color: ${(props) => props.theme['yellow-100']};
    border-color: transparent;
  }

  input {
    appearance: none;
    -webkit-appearance: none;
  }
`

export const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 40px;
  column-gap: 32px;
`
