import React, { ChangeEvent } from 'react'

/**
 * Note: I would not mix the code standard in a normal case.
 * This is just to show that there is multiple ways
 * of writing functional components in React
 */

interface InputProp {
  placeholder: string,
  onInputChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function Input(props: InputProp) {
  return (
    <div className="inputContainer">
      <input type="text" className="input" placeholder={props.placeholder} onChange={props.onInputChange} name="input" id='customInput' />
      <label className="inputLabel">{props.placeholder}</label>
    </div>
  )
}