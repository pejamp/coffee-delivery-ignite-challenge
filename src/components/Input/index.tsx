import { InputHTMLAttributes } from 'react'
import { InputContainer, OptionalTip } from './styles'
import { FieldError, useFormContext } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  optional?: boolean
  name: string
  error?: FieldError
}

export function Input({ optional, name, error, ...rest }: InputProps) {
  const { register } = useFormContext()

  return (
    <InputContainer $error={!!error}>
      <input {...rest} {...register(name)} />
      {optional && <OptionalTip>opcional</OptionalTip>}
    </InputContainer>
  )
}
