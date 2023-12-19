import {
  CartButton,
  CatalogContainer,
  CatalogFooter,
  CatalogHeader,
  InputActions,
  Price,
  Tag,
  Tags,
} from './styles'

import { ShoppingCart } from '@phosphor-icons/react'
import { InputCounter } from '../../InputCounter'
import { useState } from 'react'
import { useCart } from '../../../hooks/useCart'
import { ICart } from '../../../contexts/CartProvider'
import { formatPrice } from '../../../utils/formatPrice'

export interface ICatalog {
  title: string
  description: string
  tags: string[]
  price: number
  image: string
}

export function Catalog(props: ICatalog) {
  const { cartItems, addToCart } = useCart()
  const [coffeeAmount, setCoffeeAmount] = useState(0)

  function changeAmount(value: number) {
    setCoffeeAmount((prevState) => prevState + value)
  }

  function handleAddToCart() {
    const newCoffee: ICart = {
      title: props.title,
      price: props.price,
      amount: coffeeAmount,
      image: props.image,
    }

    const hasInCart = cartItems.find((cart) => cart.title === newCoffee.title)

    console.log(hasInCart)

    if (hasInCart) return

    if (coffeeAmount === 0) return

    addToCart(newCoffee)
  }

  const formattedPrice = formatPrice(props.price)

  return (
    <CatalogContainer>
      <CatalogHeader>
        <img src={props.image} alt={props.title} />
        <Tags>{props.tags?.map((tag) => <Tag key={tag}>{tag}</Tag>)}</Tags>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </CatalogHeader>

      <CatalogFooter>
        <Price>
          R$ <strong>{formattedPrice}</strong>
        </Price>
        <InputActions>
          <InputCounter amount={coffeeAmount} onChangeAmount={changeAmount} />
          <CartButton onClick={handleAddToCart}>
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </InputActions>
      </CatalogFooter>
    </CatalogContainer>
  )
}
