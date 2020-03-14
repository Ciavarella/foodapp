import React, { ChangeEvent, FormEvent, useState } from "react"
import Input from './Input'

const Form: React.FC = () => {
  const [name, setName] = useState<string>('default')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('name is: ', name)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Input text="Add restaurant" onInputChange={handleChange} />
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default Form