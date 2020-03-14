import React from 'react'

interface ButtonProp {
  text: string,
}

const Button: React.FC<ButtonProp> = ({ text }) => {
  return (
    <button className="btn w30">{text}</button>
  )
}

export default Button