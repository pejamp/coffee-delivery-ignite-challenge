import styled from 'styled-components'

export const CatalogContainer = styled.div`
  max-width: 16rem;
  min-height: 19rem;
  padding: 1.25rem 1.5rem;

  border-radius: 6px 36px;
  background: ${(props) => props.theme['base-200']};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const CatalogHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -2.5rem;
    margin-bottom: 0.75rem;
  }

  h3 {
    font-family: 'Baloo 2';
    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-800']};
    margin-bottom: 0.5rem;
  }

  p {
    text-align: center;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-600']};
  }
`

export const Tags = styled.ul`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`

export const Tag = styled.li`
  padding: 4px 8px;
  text-align: center;
  border-radius: 100px;
  background-color: ${(props) => props.theme['yellow-100']};

  color: ${(props) => props.theme['yellow-800']};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.625rem;
`

export const CatalogFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Price = styled.span`
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-700']};

  strong {
    font-family: 'Baloo 2';
    font-size: 1.5rem;
    font-weight: 800;
  }
`

export const InputActions = styled.div`
  display: flex;
  gap: 8px;
`

export const CartButton = styled.button`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  cursor: pointer;

  border-radius: 6px;
  background-color: ${(props) => props.theme['purple-800']};
  color: ${(props) => props.theme['base-200']};

  transition: background-color 250ms ease-in;

  &:hover {
    background-color: ${(props) => props.theme['purple-500']};
  }
`
