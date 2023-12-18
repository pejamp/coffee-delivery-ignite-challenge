import { Minus, Plus } from '@phosphor-icons/react'
import { CounterButton, CounterContainer } from './styles'

interface InputCounterProps {
  amount: number
  onChangeAmount: (value: number) => void
}

export function InputCounter({ amount, onChangeAmount }: InputCounterProps) {
  function handleIncreaseAmount() {
    if (amount === 10) return
    onChangeAmount(1)
  }

  function handleDecreaseAmount() {
    if (amount <= 0) return
    onChangeAmount(-1)
  }

  return (
    <CounterContainer>
      <CounterButton onClick={handleDecreaseAmount}>
        <Minus size={14} />
      </CounterButton>
      <span>{amount}</span>
      <CounterButton onClick={handleIncreaseAmount}>
        <Plus size={14} />
      </CounterButton>
    </CounterContainer>
  )
}
