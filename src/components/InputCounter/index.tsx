import { Minus, Plus } from '@phosphor-icons/react'
import { CounterButton, CounterContainer } from './styles'

interface InputCounterProps {
  quantity: number
  increaseQuantity: () => void
  decreaseQuantity: () => void
}

export function InputCounter({
  quantity,
  increaseQuantity,
  decreaseQuantity,
}: InputCounterProps) {
  function handleIncreaseAmount() {
    if (quantity === 10) return
    increaseQuantity()
  }

  function handleDecreaseAmount() {
    if (quantity <= 0) return
    decreaseQuantity()
  }

  return (
    <CounterContainer>
      <CounterButton onClick={handleDecreaseAmount}>
        <Minus size={14} />
      </CounterButton>
      <span>{quantity}</span>
      <CounterButton onClick={handleIncreaseAmount}>
        <Plus size={14} />
      </CounterButton>
    </CounterContainer>
  )
}
