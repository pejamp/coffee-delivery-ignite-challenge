import { Bank, CreditCard, Money } from '@phosphor-icons/react'
import { InputContainer } from './styles'
import { useFormContext } from 'react-hook-form'
import { InputHTMLAttributes } from 'react'

interface InputSelectProps extends InputHTMLAttributes<HTMLInputElement> {
  paymentType: 'credit' | 'debit' | 'money'
  name: string
}

export function InputSelect({ paymentType, name, ...props }: InputSelectProps) {
  const { register } = useFormContext()

  return (
    <InputContainer>
      <input type="radio" {...props} {...register(name)} />
      {paymentType === 'credit' && (
        <>
          <CreditCard size={16} />
          cartão de crédito
        </>
      )}
      {paymentType === 'debit' && (
        <>
          <Bank size={16} />
          cartão de débito
        </>
      )}
      {paymentType === 'money' && (
        <>
          <Money size={16} />
          dinheiro
        </>
      )}
    </InputContainer>
  )
}
