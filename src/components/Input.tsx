import React, { ChangeEvent } from 'react'

/**
 * Note: I would not mix the code standard in a normal case.
 * This is just to show that there is multiple ways
 * of writing functional components in React
 */

interface InputProp {
  text: string,
  onInputChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function Input(props: InputProp) {
  return (
    <input type="text" onChange={props.onInputChange} placeholder={props.text} />
  )
}