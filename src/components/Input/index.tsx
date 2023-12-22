import { InputHTMLAttributes } from 'react'
import { InputContainer, OptionalTip } from './styles'
import { useFormContext } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  optional?: boolean
  name: string
}

export function Input({ optional, name, ...rest }: InputProps) {
  const { register } = useFormContext()
  return (
    <InputContainer>
      <input {...rest} {...register(name)} />
      {optional && <OptionalTip>opcional</OptionalTip>}
    </InputContainer>
  )
}
