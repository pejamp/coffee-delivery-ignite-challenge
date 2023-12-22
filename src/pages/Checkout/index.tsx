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
import { useCart } from '../../contexts/CartProvider'
import { useNavigate } from 'react-router-dom'

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

export type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

export function Checkout() {
  const { cartItems } = useCart()
  const navigate = useNavigate()
  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
  })

  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = newOrderForm

  function handleNewOrder(data: NewOrderFormData) {
    if (cartItems.length === 0) return

    navigate('/success', { state: data })
    reset()
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
                  <Input
                    placeholder="CEP"
                    id="cep"
                    type="text"
                    name="cep"
                    error={errors.cep}
                  />
                </InputCEP>
                <Input
                  placeholder="Rua"
                  id="street"
                  type="text"
                  name="street"
                  error={errors.street}
                />
                <InputNumber>
                  <Input
                    placeholder="Número"
                    type="text"
                    id="number"
                    name="number"
                    error={errors.number}
                  />
                  <Input
                    placeholder="Complemento"
                    optional
                    id="complement"
                    type="text"
                    name="complement"
                    error={errors.complement}
                  />
                </InputNumber>
                <InputLocation>
                  <Input
                    placeholder="Bairro"
                    id="neighborhood"
                    type="text"
                    name="neighborhood"
                    error={errors.neighborhood}
                  />
                  <Input
                    placeholder="Cidade"
                    id="city"
                    type="text"
                    name="city"
                    error={errors.city}
                  />
                  <Input
                    placeholder="UF"
                    id="uf"
                    type="text"
                    name="uf"
                    error={errors.uf}
                  />
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
                <InputSelect
                  name="paymentMethod"
                  paymentType="credit"
                  value="Cartão de Crédito"
                />
                <InputSelect
                  name="paymentMethod"
                  paymentType="debit"
                  value="Cartão de Débito"
                />
                <InputSelect
                  name="paymentMethod"
                  paymentType="money"
                  value="Dinheiro"
                />
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
