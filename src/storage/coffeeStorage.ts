import { ICart } from '../contexts/CartProvider'
const ACCESS_KEY = 'COFFEES'

export const coffeeStorage = {
  get() {
    const getJSON = globalThis.localStorage.getItem(ACCESS_KEY)
    if (getJSON) {
      return JSON.parse(getJSON)
    } else {
      return []
    }
  },
  save(value: ICart[]) {
    const sendJSON = JSON.stringify(value)
    globalThis.localStorage.setItem(ACCESS_KEY, sendJSON)
  },
  delete() {
    globalThis.localStorage.removeItem(ACCESS_KEY)
  },
}
