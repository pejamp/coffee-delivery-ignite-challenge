import { Link } from 'react-router-dom'
import { MapPin } from '@phosphor-icons/react'
import { ActionsContainer, HeaderContainer, LocationButton } from './styles'

import { CartLink } from '../CartLink'

export function Header() {
  return (
    <HeaderContainer>
      <Link to={'/'}>
        <img src="/logo.svg" alt="" />
      </Link>
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
