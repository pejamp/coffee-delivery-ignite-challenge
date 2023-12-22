import { Trash } from '@phosphor-icons/react'
import { useCart } from '../../../contexts/CartProvider'
import { InputCounter } from '../../InputCounter'
import {
  CartActions,
  CartButton,
  CartContainer,
  CartInfo,
  CartName,
  PriceTag,
} from './styles'

import { coffees } from '../../../../data.json'
import { formatCurrency } from '../../../utils/formatCurrency'

export interface CartProps {
  id: string
  quantity: number
}

export function Cart({ id, quantity }: CartProps) {
  const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } =
    useCart()
  const item = coffees.find((coffee) => coffee.id === id)
  if (item == null) return null

  return (
    <CartContainer>
      <CartInfo>
        <img src={item.image} alt={item.title} />
        <div>
          <CartName>{item.title}</CartName>
          <CartActions>
            <InputCounter
              quantity={quantity}
              increaseQuantity={() => increaseCartQuantity(id)}
              decreaseQuantity={() => decreaseCartQuantity(id)}
            />
            <CartButton onClick={() => removeFromCart(id)}>
              <Trash size={16} />
              remover
            </CartButton>
          </CartActions>
        </div>
      </CartInfo>
      <PriceTag>R$ {formatCurrency(item.price)}</PriceTag>
    </CartContainer>
  )
}
