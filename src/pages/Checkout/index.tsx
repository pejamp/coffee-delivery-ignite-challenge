import { CurrencyDollar, MapPinLine } from '@phosphor-icons/react'
import {
  CheckoutContainer,
  CoffeeAccount,
  CoffeeCards,
  Divider,
  FormCard,
  FormContainer,
  FormHeader,
  FormInputs,
  InputCEP,
  InputLocation,
  InputNumber,
  TotalContent,
  TotalItem,
} from './styles'
import { Input } from '../../components/Input'

export function Checkout() {
  return (
    <CheckoutContainer>
      <FormContainer>
        <div>
          <h1>Complete seu pedido</h1>

          <FormCard>
            <FormHeader>
              <MapPinLine size={22} color="#C47F17" />
              <div>
                <span>Endereço de Entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </FormHeader>
            <FormInputs>
              <InputCEP>
                <Input placeholder="CEP" />
              </InputCEP>
              <Input placeholder="Rua" />
              <InputNumber>
                <Input placeholder="Número" />
                <Input placeholder="Complemento" optional />
              </InputNumber>
              <InputLocation>
                <Input placeholder="Bairro" />
                <Input placeholder="Cidade" />
                <Input placeholder="UF" />
              </InputLocation>
            </FormInputs>
          </FormCard>

          <FormCard>
            <FormHeader>
              <CurrencyDollar size={22} color="#8047F8" />
              <div>
                <span>Pagamento</span>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </FormHeader>
          </FormCard>
        </div>
        <div>
          <h1>Cafés selecionados</h1>

          <CoffeeAccount>
            <CoffeeCards>
              <div>card</div>
              <Divider />
              <div>card</div>
              <Divider />
            </CoffeeCards>
            <TotalContent>
              <TotalItem>
                <p>Total de itens</p>
                <span>R$ 29,70</span>
              </TotalItem>
              <TotalItem>
                <p>Total de itens</p>
                <span>R$ 29,70</span>
              </TotalItem>
              <TotalItem totalSum>
                <p>Total</p>
                <span>R$ 29,70</span>
              </TotalItem>
            </TotalContent>
            <button>confirmar</button>
          </CoffeeAccount>
        </div>
      </FormContainer>
    </CheckoutContainer>
  )
}
