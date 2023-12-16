import { Minus, Plus } from '@phosphor-icons/react'
import { CounterButton, CounterContainer } from './styles'

export function InputCounter() {
  return (
    <CounterContainer>
      <CounterButton>
        <Minus size={14} />
      </CounterButton>
      <span>1</span>
      <CounterButton>
        <Plus size={14} />
      </CounterButton>
    </CounterContainer>
  )
}
