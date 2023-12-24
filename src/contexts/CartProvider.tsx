import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from 'react'
import cartReducer from '../reducers/cart/reducer'
import {
  addToCartAction,
  decreaseCartQuantityAction,
  increaseCartQuantityAction,
  removeFromCartAction,
} from '../reducers/cart/actions'

export interface CartItem {
  id: string
  quantity: number
}

interface CartContext {
  getItemQuantity: (id: string) => number
  increaseCartQuantity: (id: string) => void
  decreaseCartQuantity: (id: string) => void
  removeFromCart: (id: string) => void
  addToCart: (id: string, quantity: number) => void
  cartQuantity: number
  cartItems: CartItem[]
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContext)

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, dispatch] = useReducer(cartReducer, [], (initialState) => {
    const storedStateAsJSON = localStorage.getItem('coffee-delivery')

    if (storedStateAsJSON != null) return JSON.parse(storedStateAsJSON)

    return initialState
  })

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0,
  )

  useEffect(() => {
    localStorage.setItem('coffee-delivery', JSON.stringify(cartItems))
  }, [cartItems])

  function getItemQuantity(id: string) {
    return cartItems.find((item) => item.id === id)?.quantity || 0
  }

  function increaseCartQuantity(id: string) {
    dispatch(increaseCartQuantityAction(id))
  }

  function decreaseCartQuantity(id: string) {
    dispatch(decreaseCartQuantityAction(id))
  }

  function addToCart(id: string, quantity: number) {
    dispatch(addToCartAction(id, quantity))
  }

  function removeFromCart(id: string) {
    dispatch(removeFromCartAction(id))
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
