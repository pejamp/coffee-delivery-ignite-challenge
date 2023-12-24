import { CartItem } from '../../contexts/CartProvider'
import { ActionProps, ActionTypes } from './actions'

export default function cartReducer(
  state: CartItem[],
  action: ActionProps,
): CartItem[] {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CART_ITEM: {
      if (
        state.find((item) => item.id === action.payload.id) == null &&
        action.payload.quantity > 0
      ) {
        return [...state, action.payload]
      } else {
        return state.map((item) => {
          if (item.id === action.payload.id && action.payload.quantity > 0) {
            return { ...item, quantity: action.payload.quantity }
          } else {
            return item
          }
        })
      }
    }
    case ActionTypes.REMOVE_FROM_CART: {
      return state.filter((item) => item.id !== action.payload.id)
    }
    case ActionTypes.INCREASE_CART_QUANTITY: {
      if (state.find((item) => item.id === action.payload.id) == null) {
        return [...state, { id: action.payload.id, quantity: 1 }]
      } else {
        return state.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    }
    case ActionTypes.DECREASE_CART_QUANTITY: {
      if (state.find((item) => item.id === action.payload.id)?.quantity === 1) {
        return state.filter((item) => item.id !== action.payload.id)
      } else {
        return state.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    }
    default:
      return state
  }
}
