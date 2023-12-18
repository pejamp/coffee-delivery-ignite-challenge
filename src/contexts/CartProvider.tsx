import { ReactNode, createContext, useState } from 'react'

export interface ICart {
  title: string
  price: number
  amount: number
  image: string
}

interface CartContext {
  cartItems: ICart[]
  setCartItems: React.Dispatch<React.SetStateAction<ICart[]>>
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContext)

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<ICart[]>([])

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  )
}
