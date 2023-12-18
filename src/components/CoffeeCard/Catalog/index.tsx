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

    addToCart(newCoffee)

    console.log(cartItems)
  }

  const formattedPrice = props.price.toFixed(2).toString().replace('.', ',')

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
