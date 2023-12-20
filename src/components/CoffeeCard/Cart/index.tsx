import { useCart } from '../../../contexts/CartProvider'
import { formatPrice } from '../../../utils/formatPrice'
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

export interface CartProps {
  id: string
  title: string
  price: number
  quantity: number
  image: string
}

export function Cart(props: CartProps) {
  const { increaseCartQuantity, decreaseCartQuantity } = useCart()
  const formattedPrice = formatPrice(props.price)

  return (
    <CartContainer>
      <CartInfo>
        <img src={props.image} alt={props.title} />
        <div>
          <CartName>{props.title}</CartName>
          <CartActions>
            <InputCounter
              quantity={props.quantity}
              increaseQuantity={() => increaseCartQuantity(props.id)}
              decreaseQuantity={() => decreaseCartQuantity(props.id)}
            />
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
