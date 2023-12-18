import { MapPin } from '@phosphor-icons/react'
import { ActionsContainer, HeaderContainer, LocationButton } from './styles'

import { CartLink } from '../CartLink'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src="/logo.svg" alt="" />
      </span>
      <ActionsContainer>
        <LocationButton>
          <MapPin size={32} weight="fill" />
          <span>Imperatriz, MA</span>
        </LocationButton>
        <CartLink />
      </ActionsContainer>
    </HeaderContainer>
  )
}
