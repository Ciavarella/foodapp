import React, { ChangeEvent, FormEvent, useState } from "react"
import Input from './Input'
import Button from './Button'

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
    <div className="w60">
      <form className="column align-center" onSubmit={onSubmit}>
        <Input placeholder="Add restaurant" onInputChange={handleChange} />
        <Button text="Save" />
      </form>
    </div>
  )
}

export default Form