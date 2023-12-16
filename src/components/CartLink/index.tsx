import { ShoppingCart } from '@phosphor-icons/react'
import { CartContainer, Counter } from './styles'

export function CartLink() {
  const isEmpty = false

  return (
    <CartContainer href="#">
      {!isEmpty && <Counter>3</Counter>}
      <ShoppingCart size={32} weight="fill" />
    </CartContainer>
  )
}
