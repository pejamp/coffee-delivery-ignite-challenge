import {
  CartButton,
  CatalogContainer,
  CatalogFooter,
  CatalogHeader,
  InputActions,
  Price,
  Tag,
} from './styles'

import coffeeImage from '../../../assets/Type=Americano.png'
import { ShoppingCart } from '@phosphor-icons/react'
import { InputCounter } from '../../InputCounter'

export function Catalog() {
  return (
    <CatalogContainer>
      <CatalogHeader>
        <img src={coffeeImage} alt="" />

        <Tag>tradicional</Tag>
        <h3>Expresso</h3>
        <p>Lorem</p>
      </CatalogHeader>

      <CatalogFooter>
        <Price>
          R$ <strong>3,39</strong>
        </Price>
        <InputActions>
          <InputCounter />
          <CartButton>
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </InputActions>
      </CatalogFooter>
    </CatalogContainer>
  )
}
