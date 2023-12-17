import { InputHTMLAttributes } from 'react'
import { InputContainer, OptionalTip } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  optional?: boolean
}

export function Input({ optional, ...props }: InputProps) {
  return (
    <InputContainer>
      <input {...props} />
      {optional && <OptionalTip>opcional</OptionalTip>}
    </InputContainer>
  )
}
