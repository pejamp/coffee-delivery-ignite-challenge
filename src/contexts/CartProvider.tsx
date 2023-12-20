import { ReactNode, createContext, useContext, useState } from 'react'

interface CartItem {
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
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0,
  )

  function getItemQuantity(id: string) {
    return cartItems.find((item) => item.id === id)?.quantity || 0
  }

  function addToCart(id: string, quantity: number) {
    const newCartItem = {
      id,
      quantity,
    }

    setCartItems((prevItems) => {
      if (prevItems.find((item) => item.id === id) == null && quantity > 0) {
        return [...prevItems, newCartItem]
      } else {
        return prevItems.map((item) => {
          if (item.id === id && quantity > 0) {
            return { ...item, quantity }
          } else {
            return item
          }
        })
      }
    })
  }

  function increaseCartQuantity(id: string) {
    setCartItems((prevItems) => {
      if (prevItems.find((item) => item.id === id) == null) {
        return [...prevItems, { id, quantity: 1 }]
      } else {
        return prevItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function decreaseCartQuantity(id: string) {
    setCartItems((prevItems) => {
      if (prevItems.find((item) => item.id === id)?.quantity === 1) {
        return prevItems.filter((item) => item.id !== id)
      } else {
        return prevItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function removeFromCart(id: string) {
    setCartItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id)
    })
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
