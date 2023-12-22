import { ShoppingCart } from '@phosphor-icons/react'
import { CartContainer, Counter } from './styles'
import { Link } from 'react-router-dom'
import { useCart } from '../../contexts/CartProvider'

export function CartLink() {
  const { cartItems } = useCart()
  const isCartEmpty = cartItems.length === 0

  return (
    <Link to={'/checkout'}>
      <CartContainer>
        {!isCartEmpty && <Counter>{cartItems.length}</Counter>}
        <ShoppingCart size={32} weight="fill" />
      </CartContainer>
    </Link>
  )
}
