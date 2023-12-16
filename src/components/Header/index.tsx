import { MapPin } from '@phosphor-icons/react'
import { ActionsContainer, HeaderContainer, LocationButton } from './styles'

import cdLogo from './../../assets/logo.svg'
import { CartLink } from '../CartLink'

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
        <CartLink />
      </ActionsContainer>
    </HeaderContainer>
  )
}
