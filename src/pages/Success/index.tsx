import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { useLocation } from 'react-router-dom'
import { NewOrderFormData } from '../Checkout'
import {
  OrderInfo,
  OrderContent,
  SuccessContainer,
  Info,
  InfoIcon,
} from './styles'

export function Success() {
  const location = useLocation()
  const userData: NewOrderFormData = location.state

  console.log(userData)

  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <OrderContent>
        <OrderInfo>
          <Info>
            <InfoIcon iconColor="purple-500">
              <MapPin size={16} weight="fill" />
            </InfoIcon>
            <span>
              Entrega em{' '}
              <strong>
                Rua {userData.street}, {userData.number}
              </strong>
              <span>
                {userData.neighborhood} - {userData.city}, {userData.uf}
              </span>
            </span>
          </Info>
          <Info>
            <InfoIcon iconColor="yellow-500">
              <Timer size={16} weight="fill" />
            </InfoIcon>
            <span>
              Previsão de entrega{' '}
              <span>
                <strong>20 min - 30 min</strong>
              </span>
            </span>
          </Info>
          <Info>
            <InfoIcon iconColor="yellow-800">
              <CurrencyDollar size={16} />
            </InfoIcon>
            <span>
              Pagamento na entrega{' '}
              <span>
                <strong>{userData.paymentMethod}</strong>
              </span>
            </span>
          </Info>
        </OrderInfo>

        <img src="/images/delivery-Illustration.png" alt="" />
      </OrderContent>
    </SuccessContainer>
  )
}
