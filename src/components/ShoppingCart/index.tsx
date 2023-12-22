import { useCart } from '../../contexts/CartProvider'
import { Cart } from '../CoffeeCard/Cart'
import {
  BuyButton,
  CartContainer,
  CoffeeCards,
  Divider,
  TotalContent,
  TotalItem,
} from './styles'

import { coffees } from '../../../data.json'
import { formatCurrency } from '../../utils/formatCurrency'

export function ShoppingCart() {
  const { cartItems } = useCart()
  const totalPrice = cartItems.reduce((total, currentItem) => {
    const coffee = coffees.find((coffee) => coffee.id === currentItem.id)
    return total + (coffee?.price || 0) * currentItem.quantity
  }, 0)
  const deliveryTax = cartItems.length > 0 ? 3.5 : 0
  const totalAndTax = totalPrice + deliveryTax

  return (
    <CartContainer>
      <CoffeeCards>
        {cartItems.map((item) => (
          <div key={item.id}>
            <Cart {...item} />
            <Divider />
          </div>
        ))}
      </CoffeeCards>

      <TotalContent>
        <TotalItem>
          <p>Total de itens</p>
          <span>R$ {formatCurrency(totalPrice)}</span>
        </TotalItem>
        <TotalItem>
          <p>Entrega</p>
          <span>R$ {formatCurrency(deliveryTax)}</span>
        </TotalItem>
        <TotalItem $totalSum>
          <p>Total</p>
          <span>R$ {formatCurrency(totalAndTax)}</span>
        </TotalItem>
      </TotalContent>
      <BuyButton type="submit" form="order-form">
        confirmar pedido
      </BuyButton>
    </CartContainer>
  )
}
