import React from 'react'

interface ButtonProp {
  text: string,
}

const Button: React.FC<ButtonProp> = ({ text }) => {
  return (
    <button>{text}</button>
  )
}

export default Button