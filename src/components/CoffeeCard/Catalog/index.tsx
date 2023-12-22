import { ShoppingCart } from '@phosphor-icons/react'
import { InputCounter } from '../../InputCounter'
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
import { useCart } from '../../../contexts/CartProvider'
import { useState } from 'react'
import { formatCurrency } from '../../../utils/formatCurrency'

export interface CatalogProps {
  id: string
  title: string
  description: string
  tags: string[]
  price: number
  image: string
}

export function Catalog(props: CatalogProps) {
  const { getItemQuantity, addToCart } = useCart()
  const quantity = getItemQuantity(props.id)
  const [itemQuantity, setItemQuantity] = useState(quantity)

  const formattedPrice = formatCurrency(props.price)

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
          <InputCounter
            quantity={itemQuantity}
            increaseQuantity={() =>
              setItemQuantity((prevState) => (prevState += 1))
            }
            decreaseQuantity={() =>
              setItemQuantity((prevState) => (prevState -= 1))
            }
          />
          <CartButton onClick={() => addToCart(props.id, itemQuantity)}>
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </InputActions>
      </CatalogFooter>
    </CatalogContainer>
  )
}
