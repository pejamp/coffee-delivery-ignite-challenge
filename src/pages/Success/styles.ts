import styled from 'styled-components'

export const SuccessContainer = styled.main`
  max-width: 70rem;
  margin: 5rem auto;

  h1 {
    font-size: 2rem;
    font-family: 'Baloo 2';
    font-weight: 800;
    color: ${(props) => props.theme['yellow-800']};
    margin-bottom: 4px;
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-800']};
    margin-bottom: 1.75rem;
  }
`

export const OrderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 30.75rem;
    height: 18rem;
  }
`

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 2.5rem;
  flex: 1;
  max-width: 32rem;

  border-radius: 6px 36px;
  border: 1px solid transparent;
  background:
    linear-gradient(white, white) padding-box,
    linear-gradient(135deg, #dbac2c, #8047f8) border-box;
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${(props) => props.theme['base-700']};

  span {
    display: block;
  }
`

interface InfoIconProps {
  iconColor: 'purple-500' | 'yellow-500' | 'yellow-800'
}

export const InfoIcon = styled.div<InfoIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;

  border-radius: 50%;
  background-color: ${(props) => props.theme[props.iconColor]};
  color: ${(props) => props.theme['base-100']};
`
