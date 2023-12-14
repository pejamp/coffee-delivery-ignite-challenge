import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { ActionsContainer, HeaderContainer, LocationButton } from './styles'

import cdLogo from './../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={cdLogo} alt="" />
      </span>
      <ActionsContainer>
        <LocationButton>
          <MapPin size={32} weight="fill" />
          <span>Imperatriz, MA</span>
        </LocationButton>
        <a href="#">
          <ShoppingCart size={32} weight="fill" />
        </a>
      </ActionsContainer>
    </HeaderContainer>
  )
}
