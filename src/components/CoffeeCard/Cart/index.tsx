import { ICart } from '../../../contexts/CartProvider'
import { formatPrice } from '../../../utils/formatPrice'
// import { InputCounter } from '../../InputCounter'
import {
  CartActions,
  CartButton,
  CartContainer,
  CartInfo,
  CartName,
  PriceTag,
} from './styles'

import { Trash } from '@phosphor-icons/react'

export function Cart(props: ICart) {
  const formattedPrice = formatPrice(props.price)

  return (
    <CartContainer>
      <CartInfo>
        <img src={props.image} alt={props.title} />
        <div>
          <CartName>{props.title}</CartName>
          <CartActions>
            {/* <InputCounter amount={props.amount} /> */}
            <CartButton>
              <Trash size={16} />
              remover
            </CartButton>
          </CartActions>
        </div>
      </CartInfo>
      <PriceTag>R$ {formattedPrice}</PriceTag>
    </CartContainer>
  )
}
