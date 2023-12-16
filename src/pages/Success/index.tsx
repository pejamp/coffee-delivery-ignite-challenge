import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import illustrationImage from '../../assets/Illustration.png'
import {
  OrderInfo,
  OrderContent,
  SuccessContainer,
  Info,
  InfoIcon,
} from './styles'

export function Success() {
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
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              <span>Farrapos - Porto Alegre, RS</span>
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
                <strong>Cartão de Crédito</strong>
              </span>
            </span>
          </Info>
        </OrderInfo>

        <img src={illustrationImage} alt="" />
      </OrderContent>
    </SuccessContainer>
  )
}
