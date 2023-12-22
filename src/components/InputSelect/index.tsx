import { Bank, CreditCard, Money } from '@phosphor-icons/react'
import { InputContainer } from './styles'
import { useFormContext } from 'react-hook-form'
import { InputHTMLAttributes } from 'react'

interface InputSelectProps extends InputHTMLAttributes<HTMLInputElement> {
  value: 'credit' | 'debit' | 'money'
  name: string
}

export function InputSelect({ value, name }: InputSelectProps) {
  const { register } = useFormContext()

  return (
    <InputContainer>
      <input value={value} type="radio" {...register(name)} />
      {value === 'credit' && (
        <>
          <CreditCard size={16} />
          cartão de crédito
        </>
      )}
      {value === 'debit' && (
        <>
          <Bank size={16} />
          cartão de débito
        </>
      )}
      {value === 'money' && (
        <>
          <Money size={16} />
          dinheiro
        </>
      )}
    </InputContainer>
  )
}
