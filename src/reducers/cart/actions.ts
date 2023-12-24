export enum ActionTypes {
  ADD_NEW_CART_ITEM = 'ADD_NEW_CART_ITEM',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  INCREASE_CART_QUANTITY = 'INCREASE_CART_QUANTITY',
  DECREASE_CART_QUANTITY = 'DECREASE_CART_QUANTITY',
}

export type ActionProps =
  | {
      type: ActionTypes.ADD_NEW_CART_ITEM
      payload: { id: string; quantity: number }
    }
  | { type: ActionTypes.REMOVE_FROM_CART; payload: { id: string } }
  | { type: ActionTypes.INCREASE_CART_QUANTITY; payload: { id: string } }
  | { type: ActionTypes.DECREASE_CART_QUANTITY; payload: { id: string } }

export function addToCartAction(id: string, quantity: number): ActionProps {
  return {
    type: ActionTypes.ADD_NEW_CART_ITEM,
    payload: {
      id,
      quantity,
    },
  }
}

export function removeFromCartAction(id: string): ActionProps {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: {
      id,
    },
  }
}

export function increaseCartQuantityAction(id: string): ActionProps {
  return {
    type: ActionTypes.INCREASE_CART_QUANTITY,
    payload: {
      id,
    },
  }
}

export function decreaseCartQuantityAction(id: string): ActionProps {
  return {
    type: ActionTypes.DECREASE_CART_QUANTITY,
    payload: {
      id,
    },
  }
}
