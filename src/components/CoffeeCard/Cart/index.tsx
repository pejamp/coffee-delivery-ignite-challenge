import { InputCounter } from '../../InputCounter'
import {
  CartActions,
  CartButton,
  CartContainer,
  CartInfo,
  CartName,
  PriceTag,
} from './styles'

import { Trash } from '@phosphor-icons/react'

export function Cart() {
  return (
    <CartContainer>
      <CartInfo>
        <img src="" alt="" />
        <div>
          <CartName>Expresso Tradicional</CartName>
          <CartActions>
            <InputCounter />
            <CartButton>
              <Trash size={16} />
              remover
            </CartButton>
          </CartActions>
        </div>
      </CartInfo>
      <PriceTag>R$ 9,90</PriceTag>
    </CartContainer>
  )
}
