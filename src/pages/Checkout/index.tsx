import { MapPinLine } from '@phosphor-icons/react'
import {
  CheckoutContainer,
  FormCard,
  FormContainer,
  FormHeader,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <FormContainer>
        <div>
          <h1>Complete seu pedido</h1>

          <FormCard>
            <FormHeader>
              <MapPinLine size={22} />
              <div>
                <span>Endereço de Entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </FormHeader>
          </FormCard>
          <FormCard>pagamento</FormCard>
        </div>
        <div>
          <h1>cafés selecionados</h1>

          <div>Confirmar</div>
        </div>
      </FormContainer>
    </CheckoutContainer>
  )
}
