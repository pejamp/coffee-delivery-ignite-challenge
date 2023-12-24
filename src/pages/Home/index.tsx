import { ChangeEvent, useState } from 'react'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { Catalog } from '../../components/CoffeeCard/Catalog'
import { coffees } from '../../../data.json'
import {
  CoffeeSection,
  IntroContainer,
  IntroContent,
  Item,
  ItemsContainer,
  ListContainer,
  CheckboxTag,
} from './styles'

const introItems = [
  {
    icon: <ShoppingCart size={16} weight="fill" />,
    color: 'yellow-800',
    text: 'Compra simples e segura',
  },
  {
    icon: <Package size={16} weight="fill" />,
    color: 'base-700',
    text: 'Embalagem mantém o café intacto',
  },
  {
    icon: <Timer size={16} weight="fill" />,
    color: 'yellow-500',
    text: 'Entrega rápida e rastreada',
  },
  {
    icon: <Coffee size={16} weight="fill" />,
    color: 'purple-500',
    text: 'O café chega fresquinho até você',
  },
]

export function Home() {
  const [filteredCoffees, setFilteredCoffees] = useState(coffees)

  function handleFilterCoffees(event: ChangeEvent<HTMLInputElement>) {
    const newCoffeeList = coffees.filter((coffee) =>
      coffee.tags.includes(event.target.value),
    )
    setFilteredCoffees(newCoffeeList)
  }

  return (
    <main>
      <IntroContainer>
        <div>
          <IntroContent>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
            <ItemsContainer>
              {introItems.map((item) => (
                <Item key={item.text} $itemColors={item.color}>
                  <span>{item.icon}</span>
                  {item.text}
                </Item>
              ))}
            </ItemsContainer>
          </IntroContent>

          <img src="/images/coffee-banner.png" alt="" />
        </div>
      </IntroContainer>

      <CoffeeSection>
        <div>
          <h2>Nossos cafés</h2>
          <nav>
            <ul>
              <li>
                <CheckboxTag>
                  <input
                    type="radio"
                    name="coffee-tag"
                    value="tradicional"
                    onChange={handleFilterCoffees}
                  />
                  tradicional
                </CheckboxTag>
              </li>
              <li>
                <CheckboxTag>
                  <input
                    type="radio"
                    name="coffee-tag"
                    value="especial"
                    onChange={handleFilterCoffees}
                  />
                  especial
                </CheckboxTag>
              </li>
              <li>
                <CheckboxTag>
                  <input
                    type="radio"
                    name="coffee-tag"
                    value="com leite"
                    onChange={handleFilterCoffees}
                  />
                  com leite
                </CheckboxTag>
              </li>
              <li>
                <CheckboxTag>
                  <input
                    type="radio"
                    name="coffee-tag"
                    value="alcoólico"
                    onChange={handleFilterCoffees}
                  />
                  alcoólico
                </CheckboxTag>
              </li>
              <li>
                <CheckboxTag>
                  <input
                    type="radio"
                    name="coffee-tag"
                    value="gelado"
                    onChange={handleFilterCoffees}
                  />
                  gelado
                </CheckboxTag>
              </li>
            </ul>
          </nav>
        </div>
        <ListContainer>
          {filteredCoffees.map((coffee) => (
            <li key={coffee.id}>
              <Catalog {...coffee} />
            </li>
          ))}
        </ListContainer>
      </CoffeeSection>
    </main>
  )
}
