import { CurrencyDollar, MapPinLine } from '@phosphor-icons/react'
import { Input } from '../../components/Input'
import { InputSelect } from '../../components/InputSelect'
import { ShoppingCart } from '../../components/ShoppingCart'
import * as zod from 'zod'
import {
  CheckoutContainer,
  FormCard,
  FormContainer,
  FormHeader,
  FormInputs,
  FormSelects,
  InputCEP,
  InputLocation,
  InputNumber,
} from './styles'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const newOrderFormValidationSchema = zod.object({
  cep: zod.string().regex(/\d{5}-?\d{3}/, 'CEP inválido'),
  street: zod.string().min(1, 'Informe a rua para entrega'),
  number: zod.string().refine((val) => /^\d+$/.test(val), {
    message: 'Digite apenas números para o número do local',
  }),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  uf: zod.string().min(2, 'Insira o estado corretamente').toUpperCase(),
  paymentMethod: zod
    .string()
    .min(1, { message: 'Selecione um método de pagamento' }),
})

type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

export function Checkout() {
  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
  })

  const { handleSubmit } = newOrderForm

  function handleNewOrder(data: NewOrderFormData) {
    console.log(data)
  }

  return (
    <CheckoutContainer>
      <FormContainer id="order-form" onSubmit={handleSubmit(handleNewOrder)}>
        <FormProvider {...newOrderForm}>
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
                  <Input placeholder="CEP" id="cep" type="text" name="cep" />
                </InputCEP>
                <Input
                  placeholder="Rua"
                  id="street"
                  type="text"
                  name="street"
                />
                <InputNumber>
                  <Input
                    placeholder="Número"
                    type="text"
                    id="number"
                    name="number"
                  />
                  <Input
                    placeholder="Complemento"
                    optional
                    id="complement"
                    type="text"
                    name="complement"
                  />
                </InputNumber>
                <InputLocation>
                  <Input
                    placeholder="Bairro"
                    id="neighborhood"
                    type="text"
                    name="neighborhood"
                  />
                  <Input
                    placeholder="Cidade"
                    id="city"
                    type="text"
                    name="city"
                  />
                  <Input placeholder="UF" id="uf" type="text" name="uf" />
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
              <FormSelects>
                <InputSelect name="paymentMethod" value="credit" />
                <InputSelect name="paymentMethod" value="debit" />
                <InputSelect name="paymentMethod" value="money" />
              </FormSelects>
            </FormCard>
          </div>
        </FormProvider>
        <div>
          <h1>Cafés selecionados</h1>
          <ShoppingCart />
        </div>
      </FormContainer>
    </CheckoutContainer>
  )
}
