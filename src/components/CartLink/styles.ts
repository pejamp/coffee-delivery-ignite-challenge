import styled from 'styled-components'

export const CartContainer = styled.div`
  position: relative;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: ${(props) => props.theme['yellow-100']};

  transition: all 200ms ease-in;

  svg {
    width: 22px;
    height: 22px;
    color: ${(props) => props.theme['yellow-800']};
  }

  &:hover {
    background-color: ${(props) => props.theme['yellow-500']};

    svg {
      color: ${(props) => props.theme.white};
    }

    &:has(span) {
      span {
        animation-name: scaleup;
        animation-duration: 600ms;
        animation-iteration-count: infinite;
        animation-direction: alternate;
      }
    }
  }

  @keyframes scaleup {
    from {
      transform: scale(1);
    }

    to {
      transform: scale(1.1);
    }
  }
`

export const Counter = styled.span`
  width: 1.25rem;
  height: 1.25rem;
  position: absolute;
  top: -8px;
  right: -8px;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  background-color: ${(props) => props.theme['yellow-800']};
  border-radius: 50%;

  color: ${(props) => props.theme.white};
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1;
`
