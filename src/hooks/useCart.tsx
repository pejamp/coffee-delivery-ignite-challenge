import { useContext } from 'react'
import { CartContext, ICart } from '../contexts/CartProvider'

export function useCart() {
  const { cartItems, setCartItems } = useContext(CartContext)

  function addToCart(coffee: ICart) {
    setCartItems((prevCoffees) => [...prevCoffees, coffee])
  }

  return {
    cartItems,
    addToCart,
  }
}
