import { Bank, CreditCard, Money } from '@phosphor-icons/react'
import { InputContainer } from './styles'

interface InputSelectProps {
  payment: 'credit' | 'debit' | 'money'
}

export function InputSelect({ payment }: InputSelectProps) {
  return (
    <InputContainer>
      <input checked type="radio" id="credito" name="paymnet" value="credito" />
      {payment === 'credit' && (
        <>
          <CreditCard size={16} />
          cartão de crédito
        </>
      )}
      {payment === 'debit' && (
        <>
          <Bank size={16} />
          cartão de débito
        </>
      )}
      {payment === 'money' && (
        <>
          <Money size={16} />
          dinheiro
        </>
      )}
    </InputContainer>
  )
}
